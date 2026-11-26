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
      v-if="posts && posts.length"
      class="z-10 absolute flex-1 top-11 w-full bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="post of posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-primary-focus hover:text-black"
        >
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const posts = ref([])

// Watch for search query changes
watch(searchQuery, async (newQuery) => {
  if (!newQuery) {
    posts.value = []
    return
  }
  
  // Search using Nuxt Content v2
  const { data } = await useAsyncData(`search-${newQuery}`, () =>
    queryContent('posts')
      .where({
        $or: [
          { title: { $contains: newQuery } },
          { description: { $contains: newQuery } }
        ]
      })
      .limit(10)
      .find()
  )
  
  posts.value = data.value || []
})
</script>

