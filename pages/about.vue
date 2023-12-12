<template>
  <div>
    <div class="container mt-4">
      <h1 class="mb-4">タージ・マハル</h1>
      <b-img
        src="https://thumb.photo-ac.com/a5/a5506706c92c2c1c686c034e56403e1d_t.jpeg"
        alt="Recipe Image"
        fluid
        thumbnail
        class="mb-4"
      />
      <div class="mb-4">
        <h3 class="mb-4">タージ・マハルはインド北部のアーグラにある、ムガル帝国第5代皇帝シャー・ジャハーンの妃ムムターズ・マハルの墓廟です。総大理石の白亜の廟は、インド・イスラム文化の代表的な建築物です。1983年、インドの世界遺産に登録されました。</h3>
      </div>
      <div class="mb-4">
        <b-button to="/" variant="primary">戻る</b-button>
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
import { BImg, BButton } from 'bootstrap-vue';

export default {
  components: {
    BImg,
    BButton,
  },
};
</script>

