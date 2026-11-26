<template>
  <div class="flex flex-col">
    <section class="py-20 container mx-auto px-4 flex-1">
      <div v-if="!error" class="max-w-2xl mx-auto">
        <ContentRenderer :value="content" class="prose" />
      </div>
      <div v-if="!!error" class="mt-60 p-20 bg-secondary prose">
        <h3>
          Page not found
          <div class="btn btn-ghost" @click="$router.push('/')">
            ← Go back
          </div>
        </h3>
      </div>
    </section>
    <main-footer class="flex-none" />
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const error = ref(null)

// Fetch the specific event
const { data: content, error: fetchError } = await useAsyncData(`event-${route.params.event}`, () =>
  queryContent('events', route.params.event).findOne()
)

// Handle error
if (fetchError.value) {
  error.value = true
}
</script>

