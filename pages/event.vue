<template>
  <div class="flex flex-col">
    <div class="container mx-auto">
      <div class="mt-10 mb-16 w-full ">
        <h2 class="text-4xl lg:text-5xl font-bold font-heading">
          Events
        </h2>
      </div>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/4 px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="'/events/'+article.slug"
            class="flex flex-col rounded transition-shadow duration-150 ease-in-out shadow hover:shadow-lg"
          >
            <img
              v-if="article.image"
              class="h-32 w-full object-cover rounded-t"
              :src="article.image"
            >
            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <p class="text-sm text-gray-400 mb-1">
                {{ formatDate(article.date) }}
              </p>
              <h2 class="font-bold">
                {{ article.title }}
              </h2>
              <p class="font-bold text-gray-600 text-sm" />
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
    const articles = await $content('events')
      .sortBy('date', 'desc')
      .fetch()
    return {
      articles
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
