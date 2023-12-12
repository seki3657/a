<User
<template>
  <div>
    <div class="container mt-4">
      <h1 class="mb-4">タージ・マハル</h1>
      
      <div class="mb-4">
        <h3 class="mb-4">タージ・マハルはインド北部のアーグラにある、ムガル帝国第5代皇帝シャー・ジャハーンの妃ムムターズ・マハルの墓廟です。総大理石の白亜の廟は、インド・イスラム文化の代表的な建築物です。1983年、インドの世界遺産に登録されました。</h3>
      </div>
      <div class="mb-4">
        <nuxt-link to="/" class="btn btn-primary">戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* カスタムのスタイルがあれば追加 */
</style>

<script setup>
const data = useRecipe()
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