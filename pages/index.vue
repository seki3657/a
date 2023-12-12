<template>
  <div>
    <h1>index Page「ようこそ」</h1>

    <div class="box">
      <nuxt-link to="/about">About</nuxt-link>
    </div>

    <div class="box">
      <nuxt-link to="/recipe">Recipe</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: skyblue;
}

.box {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: #90ee90; /* ライトグリーンに設定 */
}
</style>

