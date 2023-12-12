<template>
  <div>
  <h1>世界文化遺産人気ランキング</h1>
  </div>
  <div>
    <h2><nuxt-link to="/about">１位・タージ・マハル</nuxt-link></h2>
    <img
      src="https://publicdomainq.net/images/201801/11s/publicdomainq-0017727lng.jpg"
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

