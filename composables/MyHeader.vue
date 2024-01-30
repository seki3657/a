<template>
  <div>
    <div class="container mt-4">
      <MyHeader :title="pageTitle" />
      <img
        src="https://thumb.photo-ac.com/b9/b92f7ddb7e2f121217fea880c31d023c_t.jpeg"
        alt="Recipe Image"
        class="img-fluid rounded"
      />
      <div class="mb-4">
        <h3 class="mb-4">自由の女神像はアメリカのニューヨーク港内リバティ島にあり、1984年、世界遺産に登録されました。 正式名称は「世界を照らす自由」といい、アメリカの自由と民主主義の象徴となっています。</h3>
      </div>
      <div class="mb-4">
        <nuxt-link to="/" class="btn btn-primary">戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue';

const pageTitle = '自由の女神像';
</script>

<script>
export default {
  components: {
    MyHeader,
  },
  head() {
    // ... (略)
  },
};
</script>

<style scoped>

</style>
