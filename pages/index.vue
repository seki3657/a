<template>
  <div>
    <h1 class="mb-4">世界文化遺産人気ランキング</h1>

    <div class="card mb-4">
      <div class="card-body">
        <h2 class="card-title">
          <nuxt-link to="/about">１位・タージ・マハル</nuxt-link>
        </h2>
        <img
          src="https://thumb.photo-ac.com/a5/a5506706c92c2c1c686c034e56403e1d_t.jpeg"
          alt="Recipe Image"
          class="img-fluid rounded"
        />
      </div>
    </div>

<div class="card mb-4">
        <h2 class="card-title">
          <nuxt-link to="/a">2位・自由の女神</nuxt-link>
        </h2>
        <img
          src="https://thumb.photo-ac.com/b9/b92f7ddb7e2f121217fea880c31d023c_t.jpeg"
          alt="Recipe Image"
          class="img-fluid rounded"
        />
      </div>
    </div>
    <div class="box">
      <nuxt-link to="/recipe" class="btn btn-primary">Recipe</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #87CEEB; /* skyblueの代わりにBootstrapのcolor名を使用 */
}

.box {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: yellow;
}

/* このスタイルはBootstrapのスタイルを上書きする例です */
.card {
  border: 1px solid #ddd; /* カードのボーダーを追加 */
}

.card-title {
  color: #333; /* カードのタイトルの色を変更 */
}
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
