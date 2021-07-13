<template>
  <article class="flex flex-col lg:h-screen w-screen lg:overflow-hidden">
    <div class="flex h-full">
      <!--Left side-->
      <div class="relative lg:w-1/2 xs:w-full  lg:h-full ">
        <img
          :src="post && post.image"
          class="absolute h-full w-full object-cover"
        >
        <div class="absolute top-32 left-32 pr-4 text-white">
          <div class="mt-16 -mb-3 flex uppercase text-sm">
            <p class="mr-3 mb-4">
              {{ formatDate(post.date) }}
            </p>
          </div>
          <h1 class="text-6xl font-bold">
            {{ post.title }}
          </h1>
        </div>
        <div class="flex absolute top-3rem right-3rem">
          <NuxtLink
            to="/blog"
            class="mr-8 p-8 self-center text-white font-bold hover:underline"
          >
            All posts
          </NuxtLink>

          <!--          <AppSearchInput />-->
        </div>
      </div>
      <!--Right Side-->
      <div class="relative p-6 w-full md:py-8 lg:p-16 lg:w-1/2  h-full overflow-y-scroll">
        <h1 class="font-bold text-4xl">
          {{ post.title }}
        </h1>
        <p class="py-4 text-gray-400">
          {{ formatDate(post.date) }}
        </p>
        <!-- table of contents -->
        <nav class="pb-6" />
        <!-- content from markdown -->
        <nuxt-content :document="post" class="prose prose-purple" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
  </article>
</template>
<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.post).fetch()
    const [prev, next] = await $content('posts')
      .only(['title', 'post'])
      .sortBy('createdAt', 'asc')
      .surround(params.post)
      .fetch()
    return {
      post,
      prev,
      next
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
