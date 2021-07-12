<template>
  <div v-if="!!events" class="p-4">
    <div class="container mx-auto ">
      <div class="flex flex-col flex-wrap justify-center">
        <div class="w-full ">
          <h3 class="text-2xl mb-3">
            Events
          </h3>
        </div>
        <nuxt-link
          v-for="index in 6"
          :key="index"
          :to="events[index].path"
          class="flex mb-6 w-full rounded-lg transition  hover:border hover:border-gray-200"
        >
          <img class="w-1/4 rounded-tl rounded-bl object-cover" :src="events[index].image" :alt="events[index].title">
          <div class="p-3 ">
            <span class="text-sm text-gray-400">{{ formatDate(events[index].date) }}</span>
            <h2 class="font-bold text-md text-gray-800">
              {{ events[index].title }}
            </h2>
            <div class="text-primary font-medium hover:underline ">
              Event details
            </div>
          </div>
        </nuxt-link>
        <div class="flex justify-end">
          <nuxt-link class="btn btn-outline btn-sm hover:bg-primary" to="blog">
            More events
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
      events: null
    }
  },
  async fetch () {
    try {
      this.events = await this.$content('events')
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
