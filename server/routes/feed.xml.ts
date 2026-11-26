import { serverQueryContent } from '#content/server'
import RSS from 'rss'

export default defineEventHandler(async (event) => {
  const isDev = process.env.NODE_ENV === 'development'
  const baseUrl = isDev ? 'http://localhost:3000' : 'https://nl-rse.org'

  // Create RSS feed with content namespace
  const feed = new RSS({
    title: 'NL-RSE Blog and Events',
    description: 'NL-RSE Blog feed!',
    feed_url: `${baseUrl}/feed.xml`,
    site_url: baseUrl,
    custom_namespaces: {
      'content': 'http://purl.org/rss/1.0/modules/content/'
    }
  })

  // Fetch posts with body
  const posts = await serverQueryContent(event, 'posts')
    .sort({ date: -1 })
    .find()

  // Fetch events with body
  const events = await serverQueryContent(event, 'events')
    .sort({ date: -1 })
    .find()

  // Combine posts and events
  const combinedPosts = [...posts, ...events]

  // Add items to feed
  for (const post of combinedPosts) {
    // Build content:encoded with image and body HTML
    let contentEncoded = ''
    if (post.image) {
      contentEncoded += `
              <p>
                <img
                  alt="Cover image"
                  src="${post.image}"
                >
              </p>`
    }
    
    // Render the markdown body to HTML using our utility
    if (post.body) {
      const bodyHtml = await renderContentToHtml(post.body)
      contentEncoded += bodyHtml
    }

    feed.item({
      title: post.title || '',
      url: `${baseUrl}${post._path}`,
      guid: post.title,
      date: new Date(post.date),
      description: post.description || '',
      custom_elements: [
        { 'content:encoded': contentEncoded }
      ]
    })
  }

  // Return XML with custom options
  const feedString = feed.xml({ indent: true })
  
  // Clean up to match original feed format:
  // 1. Remove atom namespace
  // 2. Remove CDATA sections
  const cleanedFeed = feedString
    .replace(/ xmlns:atom="http:\/\/www\.w3\.org\/2005\/Atom"/g, '')
    .replace(/<atom:link[^>]*\/>/g, '')
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
  
  event.node.res.setHeader('content-type', 'application/xml')
  event.node.res.end(cleanedFeed)
})
