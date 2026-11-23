<template>
  <div class="flex flex-col ">
    <section class=" py-20 container mx-auto px-4 h-full ">
      <ContentRenderer v-if="!error" :value="content" class="prose max-w-2xl mx-auto " />
      <div v-if="!!error" class="mt-60 p-20 bg-secondary prose">
        <h3>
          Page not found
          <div class="btn btn-ghost" @click="$router.push('/')">
            ← Go back
          </div>
        </h3>
      </div>
    </section>
    <main-footer />
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const error = ref(null)

// Fetch the specific page
const { data: content, error: fetchError } = await useAsyncData(`page-${route.params.page}`, () =>
  queryContent('pages', route.params.page).findOne()
)

// Handle error
if (fetchError.value) {
  error.value = true
}
</script>

