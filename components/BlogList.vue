<template>
  <div class="py-10 ">
    <div class="container mx-auto px-4">
      <div class="mb-6 flex flex-wrap justify-center">
        <div class="mb-16 w-full text-center">
          <h2 class="text-4xl lg:text-5xl font-bold font-heading">
            Blog posts
          </h2>
        </div>
        <div class="flex flex-wrap -mx-3 mb-16">
          <div class="flex flex-wrap w-full">
            <div
              v-for="(post,index) in posts"
              :key="index"
              class="mb-6 w-full md:w-1/2 lg:w-1/4 px-3"
            >
              <nuxt-link :to="post.path">
                <div class="rounded overflow-hidden transition shadow hover:shadow-lg">
                  <img class="w-full max-h-48 lg:h-48 rounded-t object-cover" :src="post.image" :alt="post.title">
                  <div class="p-6 rounded-b bg-white">
                    <span class="text-sm text-gray-400">{{ formatDate(post.date) }}</span>
                    <h2 class="my-2 text-xl font-bold text-gray-800">
                      {{ post.title }}
                    </h2>
                    <div class="text-primary font-bold">
                      Read More
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div>
          <nuxt-link v-if="more" class="btn hover:bg-primary" to="blog">
            View More Articles
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['posts', 'more'],
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
