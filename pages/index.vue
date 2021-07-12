<template>
  <div>
    <blog-list />
    <main-sections />
    <main-footer class="-m-6" />
  </div>
</template>

<script>

export default {
  // async asyncData ({ $content, params }) {
  //   const articles = await $content('articles', params.slug)
  //     .only(['title', 'description', 'img', 'slug', 'author'])
  //     .sortBy('createdAt', 'desc')
  //     .fetch()
  //   const tags = await $content('tags', params.slug)
  //     .only(['name', 'description', 'img', 'slug'])
  //     .sortBy('createdAt', 'asc')
  //     .fetch()
  //   return {
  //     articles,
  //     tags
  //   }
  // }

}
</script>
