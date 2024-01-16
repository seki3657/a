<template>
  <div>
    <nuxt />
    <ABCVue />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import type ABCVue from '~/components/ABC.vue';

export default {
  components: {
    Footer,
    ABCVue
}
}
</script>