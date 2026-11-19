<template>
  <div>
    <div class="container mx-auto mb-16 w-full text-center">
      <div class=" mt-10 max-w-4xl mx-auto text-left prose">
        <p>
          The NL-RSE core team is a group of volunteers who take responsibility for running the network (organising its events and activities).
          They have regular (monthly) meetings to discuss any outstanding issues, provide input for the content of meetups and newsletters. The team consists of a chair, delegates & a secretariat.
          If you are interested in supporting Research Software Engineering in the Netherlands, consider <a href="mailto:info@nl-rse.org">joining the team</a>.
        </p>
      </div>
      <h2 class="mt-6 text-3xl lg:text-4xl font-bold font-heading mt-10">
        <span class="text-primary">NL-RSE</span> Core Team
      </h2>
    </div>
    <section class="container mx-auto flex flex-wrap pb-20">
      <div
        v-for="(member,index) in members.members"
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

      <div v-if="!!members.secretary" id="secretariat" class="p-4">
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

      <div v-if="!!members.past" id="past-core-team" class="w-full p-4">
        <a href="/core-team#past-core-team">
          <h2 class="text-2xl font-bold my-10">
            Past Core Team members
          </h2>
        </a>
        <div class="flex flex-wrap -mx-4 items-end">
          <div class="w-full lg:w-3/5 px-4">
            <ul>
              <li v-for="(member,key) in members.past" :key="key" class="mb-2 list-disc ml-4">
                <span class="font-bold">{{ member.name }},</span> {{ member.organization }}
              </li>
            </ul>
          </div>
          <div v-if="!!members.event_photos" class="w-full lg:w-2/5 px-4 mt-8 lg:mt-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure v-for="(photo,key) in members.event_photos" :key="key">
                <img
                  class="w-full h-64 rounded shadow object-cover object-center"
                  :src="photo.image"
                  :alt="photo.alt"
                >
                <figcaption class="mt-2 text-sm text-gray-600 text-center">
                  {{ photo.caption }}
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

<script>
export default {

  transition: 'fade',
  async asyncData ({ $content, params }) {
    const members = await $content('core-team')
      .fetch()

    return {
      members
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

<style scoped>

</style>