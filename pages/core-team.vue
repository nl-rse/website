<template>
  <div>
    <div class="container mx-auto mb-16 w-full text-center">
      <div class=" mt-10 max-w-4xl mx-auto text-left prose">
        <p>
          The NL-RSE core team is a group of volunteers who coordinate and support the network and its activities. They work together to strengthen the research software engineering community in the Netherlands by organising events, facilitating knowledge exchange and fostering connections.
        </p>
      </div>
      <h2 class="mt-6 text-3xl lg:text-4xl font-bold font-heading mt-10">
        <span class="text-primary">NL-RSE</span> Core Team
      </h2>
    </div>
    <section class="container mx-auto flex flex-wrap pb-20">
      <div
        v-for="(member,index) in members?.members"
        :key="index"
        class="p-4 w-full sm:w-1/2 lg:w-1/3"
      >
        <div class="flex flex-col  h-full p-4 items-center rounded shadow bg-white">
          <img
            class="rounded-full object-cover w-30"
            :src="member.image"
          >
          <div class="w-full lg:pl-6 p-4">
            <h4 class="mb-2 text-2xl font-bold font-heading">
              {{ member.name }}
            </h4>
            <p class="mb-4 text-gray-700 leading-loose" v-text="member.desc" />
          </div>
        </div>
      </div>

      <div v-if="!!members?.secretary" id="secretariat" class="p-4">
        <a href="/core-team#secretariat">
          <h2 class="text-2xl font-bold mt-10">
            NL-RSE secretariat
          </h2>
        </a>
        <p class="mb-10">
          The NL-RSE core team is supported by the NL-RSE secretariat, provided by the eScience center.
        </p>

        <div class="w-full sm:w-1/2 lg:w-1/3 flex flex-col p-4 items-center rounded shadow bg-white">
          <img
            class="rounded-full object-cover w-30"
            :src="members.secretary[0].image"
          >
          <div class="w-full lg:pl-6 p-4">
            <h4 class="mb-2 text-2xl font-bold font-heading">
              {{ members.secretary[0].name }}
            </h4>
            <p class="mb-4 text-gray-700 " v-text="members.secretary[0].desc" />
          </div>
        </div>
      </div>

      <div v-if="!!members?.past" id="past-core-team" class="w-full p-4">
        <a href="/core-team#past-core-team">
          <h2 class="text-2xl font-bold my-10">
            Past Core Team members
          </h2>
        </a>
        <div class="flex flex-wrap -mx-4 items-end">
          <div class="w-full lg:w-1/2 px-4">
            <ul>
              <li v-for="(member,key) in members.past" :key="key" class="mb-2 list-disc ml-4">
                <span class="font-bold">{{ member.name }},</span> {{ member.organization }}
              </li>
            </ul>
          </div>
          <div v-if="!!members.event_photos" class="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <figure v-for="(photo,key) in members.event_photos" :key="key">
                <img
                  class="w-full h-96 rounded shadow object-contain object-center bg-gray-100"
                  :src="photo.image"
                  :alt="photo.alt"
                >
                <figcaption class="mt-3 text-sm text-gray-700 text-left leading-relaxed">
                  <span class="block">{{ photo.title }}</span>
                  <span class="block">{{ photo.people }}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main-footer />
  </div>
</template>

<script setup>
// Fetch core team members data
const { data: members } = await useAsyncData('core-team', () =>
  queryContent('core-team').findOne()
)
</script>

<style scoped>

</style>
