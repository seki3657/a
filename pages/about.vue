<template>
  <div>
    <LayoutResizableDrawer>
      <!-- ドロワーコンテンツ -->
      <template #drawer>
        <!-- ここにドロワーコンテンツを挿入 -->
      </template>

      <!-- メインコンテンツ -->
      <template #main>
        <h1>about Page home</h1>
        <nuxt-link to="/">戻る</nuxt-link>
      </template>
    </LayoutResizableDrawer>
  </div>
</template>

<script>
import LayoutResizableDrawer from '~/components/LayoutResizableDrawer.vue';

export default {
  components: {
    LayoutResizableDrawer,
  },
};
</script>

