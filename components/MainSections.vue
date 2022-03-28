<template>
  <section>
    <div class="py-20 bg-gray-100">
      <div class="container mx-auto px-4 md:flex gap-x-6">
        <div class="flex flex-wrap -mx-3 w-full md:w-1/4">
          <div class="mb-6 lg:mb-0 w-full px-3">
            <nuxt-link to="/resources">
              <div class="p-6 flex flex-wrap bg-white shadow hover:shadow-lg transition rounded-lg">
                <span class="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-pink-100">
                  <svg class="h-8 w-8 md:w-12 md:h-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <div class="w-full ">
                  <h3 class="mb-2 text-2xl font-bold font-heading">
                    Resources
                  </h3>
                  <p class="text-gray-500">
                    Documentation, materials and useful links for all NL-RSE
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white shadow rounded-lg md:w-1/2 ">
          <EventsList :events="events" />
        </div>

        <div class="flex flex-wrap w-full bg-white shadow rounded-lg p-2 md:w-1/3 ">
          <a
            class="twitter-timeline"
            data-width="100%"
            data-chrome="noscrollbar"
            data-tweet-limit="2"
            data-dnt="true"
            href="https://twitter.com/nl_rse?ref_src=twsrc%5Etfw"
          >Tweets by nl_rse</a> <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </div>
      </div>
    </div>
    <div class="skew skew-bottom mr-for-radius">
      <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 0 10 0 0 10" />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  props: ['events']
}
</script>

<style scoped>

</style>
