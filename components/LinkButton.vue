<template>
  <UButton 
    :to="href" 
    color="black" 
    variant="solid"
  >
    <slot></slot>
  </UButton>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
