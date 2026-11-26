<template>
  <div class="flex flex-col ">
    <div class="container mx-auto h-full">
      <blog-list :posts="posts" />
    </div>
    <main-footer />
  </div>
</template>

<script setup>
// Fetch all blog posts
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('posts')
    .sort({ date: -1 })
    .find()
)

// Helper function for date formatting
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
</script>

<style scoped>

</style>
