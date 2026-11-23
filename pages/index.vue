<template>
  <div>
    <main-sections :events="events" />
    <blog-list :posts="posts" :more="true" />
    <main-footer />
  </div>
</template>

<script setup>
// Fetch posts and events using Nuxt 3 Content API
const { data: posts } = await useAsyncData('home-posts', () =>
  queryContent('posts')
    .sort({ date: -1 })
    .limit(4)
    .find()
)

const { data: events } = await useAsyncData('home-events', () =>
  queryContent('events')
    .sort({ date: -1 })
    .limit(6)
    .find()
)
</script>

