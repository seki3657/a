<template>
  <div>
    <v-container>
      <slot name="main">
        <!-- メインコンテンツが入る -->
      </slot>
    </v-container>
    <my-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import MyFooter from '@/components/my-footer.vue';

/**
 * カスタムレイアウト
 */
@Component({ components: { MyFooter } })
export default class LayoutCustom extends Vue {}
</script>