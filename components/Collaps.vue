<template>
  <div
    tabindex="0"
    class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
  >
    <div class="collapse-title text-xl font-medium">
      {{ title }}
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here if needed */
.collapse-title {
  cursor: pointer;
}
</style>
