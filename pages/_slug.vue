<template>
  <div class="flex flex-col ">
    <section class=" py-20 container mx-auto px-4 h-full ">
      <nuxt-content :document="content" class="prose max-w-2xl mx-auto " />
    </section>
    <main-footer />
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    const content = await $content(params.slug).fetch()
    return {
      content
    }
  }
}
</script>
