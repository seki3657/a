<template>
  <div>
  <h1>世界文化遺産人気ランキング</h1>
  </div>
  <div>
    <h2><nuxt-link to="/about">１位・タージ・マハル</nuxt-link></h2>
    <img
      src="https://img.cpcdn.com/recipes/3695776/894x1461s/03855e67f64548a05b1f995faabe8f57?u=12868943&p=1455726325"
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

