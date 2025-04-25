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

/* Target the actual list item marker */
:deep(.collapse-content li::marker) {
  content: none !important; /* Try removing the marker content */
  font-size: 0 !important; /* Hide the marker */
  display: none !important; /* Ensure it doesn't take space */
  color: transparent !important; /* Make it invisible */
}

/* Also try removing any ::before pseudo-elements just in case */
:deep(.collapse-content li::before) {
  content: none !important;
  display: none !important;
}

/* And target the li directly as a fallback */
:deep(.collapse-content li) {
  list-style-type: none !important; /* Force removal of list style */
  list-style: none !important; /* Double ensure */
  padding-left: 0; /* Ensure no extra padding causing alignment issues */
}
</style>
