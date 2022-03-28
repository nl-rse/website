<template>
  <div class="flex flex-col">
    <section class="py-20 container mx-auto px-4 flex-1">
      <div class="max-w-2xl mx-auto">
        <nuxt-content :document="event" class="prose" />
      </div>
    </section>
    <main-footer class="flex-none" />
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    const event = await $content('events', params.event).fetch()
    return {
      event
    }
  }
}
</script>
