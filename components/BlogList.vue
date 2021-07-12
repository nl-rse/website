<template>
  <div v-if="!!posts" class="py-10 ">
    <div class="container mx-auto px-4">
      <div class="mb-6 flex flex-wrap justify-center">
        <div class="mb-16 w-full text-center">
          <span class="text-primary font-bold">NL-RSE</span>
          <h2 class="text-4xl lg:text-5xl font-bold font-heading">
            Our Blog
          </h2>
        </div>
        <div class="flex flex-wrap -mx-3 mb-16">
          <div class="flex flex-wrap w-full">
            <nuxt-link v-for="(n, index) in 4" :key="index" :to="posts[index].path" class="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
              <div class="rounded overflow-hidden transition shadow hover:shadow-lg">
                <img class="w-full lg:h-48 rounded-t object-cover" :src="posts[index].image" :alt="posts[index].title">
                <div class="p-6 rounded-b bg-white">
                  <span class="text-sm text-gray-400">{{ formatDate(posts[index].date) }}</span>
                  <h2 class="my-2 text-xl font-bold text-gray-800">
                    {{ posts[index].title }}
                  </h2>
                  <div class="text-primary font-bold">
                    Read More
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div>
          <nuxt-link class="btn hover:bg-primary" to="blog">
            View More Articles
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      posts: null
    }
  },
  async fetch () {
    try {
      this.posts = await this.$content('posts')
        .only(['title', 'date', 'image', 'slug'])
        .sortBy('date', 'desc')
        .fetch()
    } catch {
      this.error = true
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
