<template>
  <div class="flex flex-col">
    <!-- Text container with conditional rendering based on isExpanded -->
    <p ref="textContent" :class="lineClampClass" v-html="text" />

    <div>
      <!-- Conditionally display Read More / Read Less Button -->
      <div class="hidden line-clamp-6 line-clamp-5 line-clamp-4 line-clamp-3 line-clamp-2 line-clamp-1" />
      <button class="my-6 text-primary hover:underline" @click="toggleText">
        {{ isExpanded ? 'Read Less' : 'Read More' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadMore',
  props: {
    text: String,
    lineClamp: {
      type: Number,
      default: 3 // Default to 3 lines if not specified
    }
  },
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    lineClampClass () {
      return this.isExpanded ? {} : { ['line-clamp-' + this.lineClamp]: true }
    }
  },

  methods: {
    toggleText () {
      this.isExpanded = !this.isExpanded
      this.$nextTick(this.checkOverflow)
    }

  }
}
</script>
