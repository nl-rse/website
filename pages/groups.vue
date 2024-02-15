<template>
  <div>
    <div class="container mx-auto mb-16 w-full text-center">
      <div class=" mt-10 max-w-4xl mx-auto text-left prose">
        <p>
          Many research groups in the Netherlands contain Research Software Engineers.
          This page aims to provide an overview of these groups.
          If you would like to add your own group here, please fill <a href="https://github.com/nl-rse/website/issues/new?labels=group&projects=&template=rse-group.yml">this form.</a>
        </p>
        <p>
          The descriptions of the groups below include a description of the group, the size of the group (in FTEs), as well as the percentage of total time spent on RSE activities on each group (RSE focus).
        </p>
      </div>
      <h2 class="mt-6 text-3xl lg:text-4xl font-bold font-heading mt-10">
        <span class="text-primary">RSE</span> Groups in NL
      </h2>
    </div>
    <section class="container mx-auto flex flex-wrap pb-20">
      <div
        v-for="(group,index) in groups.groups"
        :key="index"
        class="p-4 w-full sm:w-1/2 lg:w-1/3"
      >
        <div class="flex flex-col h-full p-4 items-center rounded shadow bg-white">
          <div class="w-full lg:pl-6 p-4 flex flex-col">
            <h4 class="mb-2 text-2xl font-bold font-heading h-full">
              {{ group.title }}
            </h4>
            <ReadMore :text="group.research_goal" :line-clamp="6" />
            <span class="mt-4" />
            <span class="mr-4 font-bold">Size: {{ group.group_size }}</span>
            <span class="mr-4 font-bold">RSE Focus: {{ group.group_focus }}</span>
            <a v-if="!!group.url" class="mr-4 font-bold" :href="group.url">website</a>
            <a v-if="!!group.contact" class="mr-4 font-bold" :href="group.contact">contact</a>
          </div>
        </div>
      </div>
    </section>

    <main-footer />
  </div>
</template>

<script>
import ReadMore from '~/components/ReadMore.vue'
export default {

  transition: 'fade',
  async asyncData ({ $content, params }) {
    const groups = await $content('groups')
      .fetch()

    return {
      groups
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
