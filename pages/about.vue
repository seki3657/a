<template>
  <layout-normal>
    <template #main>
      <div>
        <h1>about Page home</h1>
        <nuxt-link to="/">戻る</nuxt-link>
      </div>
    </template>
  </layout-normal>
</template>

<script lang="ts">
import LayoutNormal from '@/layouts/LayoutNormal.vue';

export default {
  layout: LayoutNormal,
};
</script>