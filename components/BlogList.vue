<template>
  <section>
    <!--    <div v-for="(item,key) in posts" :key="key">-->
    <!--      {{ item.title }}-->
    <!--    </div>-->

    <!--    <nuxt-content :document="posts" />-->

    <div v-if="!!posts" class="py-20 bg-gray-50 radius-for-skewed">
      <div class="container mx-auto px-4">
        <div class="mb-6 flex flex-wrap justify-center">
          <div class="mb-16 w-full text-center">
            <span class="text-primary font-bold">NL-RSE</span>
            <h2 class="text-4xl lg:text-5xl font-bold font-heading">
              Our Blog
            </h2>
          </div>
          <div class="flex flex-wrap -mx-3 mb-16">
            <div class="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
              <div class="h-full flex flex-col rounded shadow">
                {{ posts[0].image }}
                <img class="rounded-t object-cover h-80 lg:h-full w-full" :src="posts[0].image" :alt="posts[0].title">
                <div class="mt-auto p-6 rounded-b bg-white">
                  <span class="text-sm text-gray-400"> {{ formatDate(posts[0].date) }}</span>
                  <h2 class="my-2 text-2xl font-bold">
                    {{ posts[0].title }}
                  </h2>
                  <nuxt-link :to="posts[0].path" class="font-bold">
                    Read More
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-full lg:w-1/2">
              <div v-for="index in 4" :key="index" class="mb-6 w-full lg:w-1/2 px-3">
                <div class="rounded overflow-hidden shadow">
                  <img class="lg:h-48 rounded-t object-cover" :src="posts[index + 1].image" :alt="posts[index + 1].title">
                  <div class="p-6 rounded-b bg-white">
                    <span class="text-sm text-gray-400">{{ formatDate(posts[index +1].date) }}</span>
                    <h2 class="my-2 text-2xl font-bold">
                      {{ posts[index + 1].title }}
                    </h2>
                    <nuxt-link :to="posts[index +1].path" class="font-bold">
                      Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div><a class="btn " href="#">View More Articles</a></div>
        </div>
      </div>
    </div>
    <div class="skew skew-bottom mr-for-radius">
      <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 0 10 0 0 10" />
      </svg>
    </div>
    <div class="skew skew-bottom ml-for-radius">
      <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 0 10 0 10 10" />
      </svg>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      posts: null
    }
  },
  async fetch () {
    // const { page } = this.$route.params
    try {
      this.posts = await this.$content('posts')
        // .only(['title', 'description', 'img', 'slug', 'author'])
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
