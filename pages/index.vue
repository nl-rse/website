<template>
  <div>
    <blog-list :posts="posts" :more="true" />
    <main-sections :events="events" />
    <main-footer />
  </div>
</template>
<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    // blog list
    const posts = await $content('posts')
      .limit(4)
      .sortBy('date', 'desc')
      .fetch()

    const events = await $content('events')
      .limit(6)
      .sortBy('date', 'desc')
      .fetch()

    return {
      posts,
      events
    }
  }
}
</script>
