<template>
  <section>
    <nav class="relative px-6 py-6 flex justify-between items-center bg-gray-900">
      <span class="text-white text-3xl font-bold leading-none">

        <div
          class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 sm:flex sm:mx-auto sm:items-center sm:space-x-6"
        >
          <div v-for="item in menu.items" :key="item.path">
            <nuxt-link class="text-sm text-gray-300 hover:text-white" :to="item.path">
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
        <!-- menu-->
        <responsive-menu ref="menu">
          <div class="p-6">

            <Logo @click.native="$refs.menu.close" />
            <div class="mt-10">
              <div v-for="item in menu.items" :key="item.path" class="mt-3">
                <nuxt-link class="text-sm text-gray-300 hover:text-white" :to="item.path" @click.native="$refs.menu.close" @click="$refs.menu.close()">
                  {{ item.title }}
                </nuxt-link>
              </div>
            </div>
            <social-icons class="mt-20" />
          </div>
        </responsive-menu>
        <Logo class="pl-6 sm:pl-0" />

      </span>

      <!-- Social icons-->
      <social-icons />
    </nav>

    <!--       header only if in the page main-->
    <div class="relative pt-12  bg-gray-900 border-b-4 border-primary">
      <div v-show="$route.path == '/'" class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center mb-12 sm:mb-20">
          <h2 class="mb-10 text-4xl lg:text-5xl text-gray-50 font-bold slidein-animation">
            Do you write software <br> for your research?
          </h2>
          <p class="text-white my-10 slidein-animation transition" style="animation-delay: 300ms">
            NL-RSE brings together the community of people writing and contributing to research
            software from Dutch universities, knowledge institutes, companies and other
            organizations to share knowledge, to organize meetings, and raise awareness for the
            scientific recognition of research software.
          </p>

          <div class="flex items-center justify-center">
            <a
              class="btn btn-primary w-full text-gray-300 hover:text-white hover:bg-primary hover:animation hover:animate-spin py-2 px-6 text-wrap"
              target="_blank"
              href="https://lists.nl-rse.org/mailman/listinfo/everyone"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Join the community of 200+ Research engineers
            </a>
            <!--            <a-->
            <!--              class="btn py-2 px-6"-->
            <!--              style="animation-delay: 200ms"-->
            <!--            >About NL-RSE</a>-->
          </div>
        </div>
      </div>

      <!--        <div class="absolute inset-x-0 max-w-3xl mx-auto px-4">-->
      <!--          <img-->
      <!--            class="rounded-3xl md:rounded-6xl md:rounded-br-none"-->
      <!--            src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"-->
      <!--            alt=""-->
      <!--          >-->
      <!--          <div class="absolute inset-0 flex items-center justify-center">-->
      <!--            <button-->
      <!--              class="flex items-center justify-center bg-white rounded-full"-->
      <!--            >-->
      <!--              <svg-->
      <!--                class="-->
      <!--              w-16-->
      <!--              h-16-->
      <!--              text-purple-600-->
      <!--              hover:text-purple-700-->
      <!--              "-->
      <!--                xmlns="http://www.w3.org/2000/svg"-->
      <!--                viewBox="0 0 20 20"-->
      <!--                fill="currentColor"-->
      <!--              >-->
      <!--                <path-->
      <!--                  fill-rule="evenodd"-->
      <!--                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"-->
      <!--                  clip-rule="evenodd"-->
      <!--                />-->
      <!--              </svg>-->
      <!--            </button>-->
      <!--          </div>-->
      <!--        </div>-->
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      menu: []
    }
  },
  async fetch () {
    this.menu = await this.$content('menu-items').fetch()
    // this.menu = await this.$content('pages').fetch()
  },
  methods: {
    hello () {
      console.log('🎹')
    }
  }
}
</script>
