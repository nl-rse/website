<template>
  <div class="flex flex-col">
    <section class="py-20 container mx-auto px-4 flex-1">
      <div class="max-w-2xl mx-auto">
        <nuxt-content :document="content" class="prose" />
      </div>
      <div v-if="!!error" class="mt-60 p-20 bg-secondary prose">
        <h3>
          Page not found
          <div class="btn btn-ghost" @click="$router.push('/')">
            ← Go back
          </div>
        </h3>
      </div>
    </section>
    <main-footer class="flex-none" />
  </div>
</template>

<script>
export default {
  transition: 'fade',
  data () {
    return {
      content: {},
      error: null
    }
  },
  async fetch () {
    const { event } = this.$route.params
    try {
      this.content = await this.$content('events/' + event).fetch()
    } catch {
      this.error = true
    }
  }
}
</script>
