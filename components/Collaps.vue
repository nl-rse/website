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
  padding-left: 0; /* Remove default padding */
}

:deep(.collapse-content li::before) {
  /* Attempt to remove any pseudo-element markers if list-style:none isn't enough */
  content: none !important;
  display: none !important;
}

/* If the above doesn't work, try targeting li directly */
/* :deep(.collapse-content li) { */
/*   list-style-type: none; */
/* } */
</style>
