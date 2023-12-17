<template>
  <div>
    <h1 class="mb-4 text-center">世界文化遺産人気ランキング</h1>

    <div class="card-deck mb-4">
      <div class="card stylish-card">
        <div class="card-body">
          <h2 class="card-title">
            <nuxt-link to="/about">１位・タージ・マハル</nuxt-link>
          </h2>
          <img
            :src="require('~/static/images/taj-mahal.jpg')"
            alt="Taj Mahal"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <div class="card stylish-card">
        <div class="card-body">
          <h2 class="card-title">
            <nuxt-link to="/a">2位・自由の女神</nuxt-link>
          </h2>
          <img
            :src="require('~/static/images/statue-of-liberty.jpg')"
            alt="Statue of Liberty"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </div>

    <div class="text-center">
      <nuxt-link to="/recipe" class="btn btn-primary stylish-button">Recipe</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f8f9fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.stylish-card {
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.stylish-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
}
</style>

<script setup>
const data = useRecipe()
</script>
