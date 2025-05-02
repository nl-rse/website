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

/* Target slotted content (ul/li) within collapse-content */
/* Use :deep() to pierce scoped CSS boundary */
:deep(.collapse-content ul) {
  list-style: none;
  list-style: none; /* Remove default list style from the ul */
  padding-left: 0; /* Remove default padding */
}

/* Specifically target and hide the ::marker pseudo-element for li inside collapse-content */
:deep(.collapse-content li::marker) {
  display: none; /* Primary method to hide the marker */
  content: ""; /* Ensure no content is rendered */
  font-size: 0; /* Collapse the space it might take */
  color: transparent; /* Make it invisible */
}

/* Keep li padding clean */
:deep(.collapse-content li) {
  padding-left: 0;
}
</style>
