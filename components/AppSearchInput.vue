<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white"
    >
    <ul
      v-if="posts.length"
      class="z-10 absolute flex-1 top-11 w-full bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink
          :to="post.slug "
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-primary-focus hover:text-black"
        >
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchQuery: '',
      posts: []
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.posts = []
        return
      }
      this.posts = await this.$content('posts')
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>
