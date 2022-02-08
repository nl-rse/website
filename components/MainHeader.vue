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

        <Logo class="pl-6 sm:pl-0 sm:relative absolute top-3" />

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
          <p class="text-white my-10 slidein-animation transition">
            NL-RSE brings together the community of people writing and contributing to research
            software from Dutch universities, knowledge institutes, companies and other
            organizations to share knowledge, to organize meetings, and raise awareness for the
            scientific recognition of research software.
          </p>

          <div class="flex gap-3 items-center justify-center max-w-3xl">
            <a
              class="w-1/2 btn btn-primary text-gray-300 hover:text-white hover:bg-primary hover:animation hover:animate-spin py-2 px-6 text-wrap"
              target="_blank"
              href="https://lists.nl-rse.org/mailman/listinfo/everyone"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Join the community of 200+ Research Software Engineers
            </a>

            <div
              class="w-1/2 btn btn-primary text-gray-300 hover:text-white hover:bg-primary hover:animation hover:animate-spin p-0"
              style="max-width: 280px; min-height: 100px"
              target="_blank"
              href="https://lists.nl-rse.org/mailman/listinfo/everyone"
              @click="showVideo = !showVideo"
            >
              <img src="~/assets/video_button.webp" alt="Video Homepage NL-RSE">
            </div>
          </div>
        </div>
        <transition name="fade">
          <iframe
            v-if="showVideo"
            class="absolute top-0 left-0 w-full h-full pt-4"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kLzU11-wY4E?rel=0&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </transition>
      </div>
      <transition name="fade">
        <div
          v-if="showVideo"
          class="absolute bottom-0 flex items-center font-bold cursor-pointer"
          style="transform: translate(16px, 40px);"
          @click="showVideo = !showVideo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          Close video
        </div>
      </transition>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      showVideo: false,
      menu: []
    }
  },
  async fetch () {
    this.menu = await this.$content('menu-items').fetch()
  }
}
</script>

<style>
.fade-enter-active {transition: opacity 0.2s;}
.fade-leave-active {transition: opacity 0.2s;}
.fade-enter, .panel-leave-to  {opacity: 0}
</style>
