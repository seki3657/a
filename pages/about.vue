<template>
  <div>
    <div class="container mt-4">
      <h1 class="mb-4">タージ・マハル</h1>
      
      <div class="mb-4">
        <nuxt-link to="/" class="btn btn-primary">戻る</nuxt-link>
      </div>

      <!-- ここにコンテンツを追加 -->
    </div>
  </div>
</template>

<style scoped>
/* カスタムのスタイルがあれば追加 */
</style>

<script setup>
// コンポーネントのロジックがあれば追加
</script>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
          integrity: 'sha384-GLhlTQ8iKII+UcCOJ3mOefGtr5lqQ8z5nZl5cbz5l5u0jBRbbC6LHEz1ke2bTII',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js',
          integrity: 'sha384-eMMyWiaWqDzx9OyDD10aysoA9/z9qdyY/dP0rlkyiMDzvqJb4FU/XjIWrPTdWl+P',
          crossorigin: 'anonymous',
          defer: true,
        },
      ],
    };
  },
};
</script>
