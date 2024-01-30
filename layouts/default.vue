[15:32] 関 亮太
<script setup>

import { useMouse } from './mouse.js'

const { x, y } = useMouse()

</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
[15:50] 関 亮太
<template>

  <div>

    <nuxt />

    <Footer />

  </div>

</template>

<script>

import Footer from '@/components/Footer'

export default {

  components: {

    Footer

  }

}

</script>