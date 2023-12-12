<template>
  <div>
  <h1>世界文化遺産人気ランキング</h1>
  </div>
  <div>
    <h2><nuxt-link to="/about">１位・タージ・マハル</nuxt-link></h2>
    <img
      src="https://thumb.photo-ac.com/a5/a5506706c92c2c1c686c034e56403e1d_t.jpeg"
      alt="Recipe Image"
    />
  </div>
  <div>  <nuxt-link to="/recipe">Recipe</nuxt-link>
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
    background-color: yellow;
  }
  </style>

<script setup>
const data = useRecipe()
</script>

