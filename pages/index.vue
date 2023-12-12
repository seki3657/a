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
  margin: 10 auto;
  width: 50px;
  height: 50px;
  background-color: yellow;
}
.box {
  width: 300px;
  height: 185px;
  background-image: url("https://jajaaan.co.jp/wp-content/uploads/2020/04/css-background.png");
  background-size: 300px; 185px;
}
</style>

