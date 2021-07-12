<template>
  <div class="flex flex-col">
    <div class="container mx-auto">
      <div class="mt-10 mb-16 w-full ">
        <h2 class="text-4xl lg:text-5xl font-bold font-heading">
          Our Blog
        </h2>
      </div>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md"
          >
            <img
              v-if="article.image"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
              :src="article.image"
            >
            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">
                {{ article.title }}
              </h2>
              <!--            <p>by {{ article.author.name }}</p>-->
              <p class="font-bold text-gray-600 text-sm">
              <!--              {{ article.description }}-->
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <main-footer />
  </div>
</template>

<script>
export default {

  transition: 'fade',
  async asyncData ({ $content, params }) {
    const articles = await $content('posts')
      .sortBy('date', 'desc')
      .fetch()
    console.log('🎹', articles)
    // const tagsList = await $content('tags')
    //   .only(['name', 'slug'])
    //   .where({ name: { $containsAny: article.tags } })
    //   .fetch()
    // const tags = Object.assign({}, ...tagsList.map(s => ({ [s.name]: s })))
    // const [prev, next] = await $content('posts')
    //   .only(['title', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .surround(params.slug)
    //   .fetch()
    return {
      articles
      // prev,
      // next
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
