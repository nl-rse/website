import { parseMarkdown } from '@nuxtjs/mdc/runtime'

/**
 * Render Nuxt Content body AST to HTML string
 * This is similar to what nuxt-content-body-html did in Nuxt 2
 */
export async function renderContentToHtml(body: any): Promise<string> {
  if (!body) return ''
  
  // Simple AST to HTML renderer
  // This traverses the content AST and converts it to HTML
  function nodeToHtml(node: any): string {
    if (!node) return ''
    
    if (node.type === 'text') {
      return node.value || ''
    }
    
    if (node.type === 'element') {
      const tag = node.tag || 'div'
      const props = node.props || {}
      const children = node.children || []
      
      // Build attributes
      let attrs = ''
      for (const [key, value] of Object.entries(props)) {
        if (key === 'className') {
          attrs += ` class="${value}"`
        } else if (typeof value === 'string') {
          attrs += ` ${key}="${value}"`
        }
      }
      
      // Render children
      const childrenHtml = children.map(nodeToHtml).join('')
      
      // Self-closing tags
      if (['img', 'br', 'hr', 'input'].includes(tag)) {
        return `<${tag}${attrs}>`
      }
      
      return `<${tag}${attrs}>${childrenHtml}</${tag}>`
    }
    
    if (node.type === 'root') {
      const children = node.children || []
      return children.map(nodeToHtml).join('')
    }
    
    // Handle other node types
    if (Array.isArray(node)) {
      return node.map(nodeToHtml).join('')
    }
    
    return ''
  }
  
  try {
    return nodeToHtml(body)
  } catch (error) {
    console.error('Error rendering content to HTML:', error)
    return ''
  }
}
