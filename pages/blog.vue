<template>
  <div class="container mx-auto">
    <blog-list :posts="posts" />
    <main-footer />
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    // blog list
    const posts = await $content('posts')
      .only(['title', 'date', 'image', 'slug'])
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>

</style>
