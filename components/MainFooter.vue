<template>
  <section class="bg-gray-900">
    <div class="flex w-full">
      <div class="w-1/3 flex">
        <div class="w-1/3 py-1 bg-blue-400" />
        <div class="w-1/3 py-1 bg-pink-400" />
        <div class="w-1/3 py-1 bg-green-400" />
      </div>
      <div class="w-1/3 flex">
        <div class="w-1/3 py-1 bg-purple-400" />
        <div class="w-1/3 py-1 bg-yellow-400" />
        <div class="w-1/3 py-1 bg-blue-400" />
      </div>
      <div class="w-1/3 flex">
        <div class="w-1/3 py-1 bg-pink-400" />
        <div class="w-1/3 py-1 bg-green-500" />
        <div class="w-1/3 py-1 bg-purple-600" />
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="pt-10 pb-12">
        <div class="relative lg:pb-8 mb-8 flex flex-wrap lg:border-b lg:border-gray-800">
          <p class="w-full lg:w-auto text-gray-400 text-sm text-center lg:text-left order-last lg:order-first">
            © {{ new Date().getFullYear() }}. All rights reserved.
          </p>
          <div
            class="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-6 lg:mb-0 mx-auto"
          >
            <a class="mr-6 text-sm hover:text-gray-500" href="#">Terms of Service</a><a
              class="text-sm hover:text-gray-500"
              href="#"
            >Police Privacy</a>
          </div>
          <div
            class="mb-12 lg:mb-0 lg:ml-auto w-full lg:w-auto order-first lg:order-last text-center lg:text-left"
          >
            <a class="inline-block text-white text-xl font-bold leading-none" href="#">
              <!--                <img class="inline-block h-12 lg:h-6" src="atis-assets/logo/atis/atis-mono-white.svg" alt="" width="auto">-->

            </a>
          </div>
        </div>
        <div class="flex justify-center">
          <!--            <a class="inline-block w-10 mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded" href="#">-->
          <!--              <img class="mx-auto" src="atis-assets/social/facebook-purple.svg">-->
          <!--            </a>-->
          <!--            <a class="inline-block w-10 mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded" href="#">-->
          <!--              <img class="mx-auto" src="atis-assets/social/twitter-purple.svg">-->
          <!--            </a>-->
          <!--            <a class="inline-block w-10 p-2 bg-gray-800 hover:bg-gray-700 rounded" href="#">-->
          <!--              <img class="mx-auto" src="atis-assets/social/instagram-purple.svg">-->
          <!--            </a>-->
        </div>
      </div>
    </div>
  </section>
</template>
