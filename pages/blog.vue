<template>
  <div class="m-8">
    <!--    <TheHeader />-->

    <h1 class="font-bold text-4xl">
      Blog Posts
    </h1>
    <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
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
    <!--    <h3 class="mb-4 font-bold text-2xl uppercase text-center">-->
    <!--      Topics-->
    <!--    </h3>-->
    <!--    <ul class="flex flex-wrap mb-4 text-center">-->
    <!--      <li-->
    <!--        v-for="tag of tags"-->
    <!--        :key="tag.slug"-->
    <!--        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"-->
    <!--      >-->
    <!--        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">-->
    <!--          <p-->
    <!--            class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"-->
    <!--          >-->
    <!--            {{ tag.name }}-->
    <!--          </p>-->
    <!--        </NuxtLink>-->
    <!--      </li>-->
    <!--    </ul>-->
    <!--    <footer class="flex justify-center border-gray-500 border-t-2">-->
    <!--      <p class="mt-4">-->
    <!--        Created by-->
    <!--        <a-->
    <!--          href="https://twitter.com/debs_obrien"-->
    <!--          class="font-bold hover:underline"-->
    <!--        >Debbie O'Brien</a>-->
    <!--        at NuxtJS. See the-->
    <!--        <a-->
    <!--          href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"-->
    <!--          class="font-bold hover:underline"-->
    <!--        >tutorial</a>-->
    <!--        for how to build it.-->
    <!--      </p>-->
    <!--    </footer>-->
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
