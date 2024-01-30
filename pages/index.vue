<template>
  <div>
    <h1 class="mb-4 text-center">{{ title }}</h1>

    <div class="card-deck mb-4">
      <div class="card stylish-card">
        <div class="card-body">
          <h2 class="card-title">
            <nuxt-link to="/about">{{ title2 }}</nuxt-link>
          </h2>
          <img
            :src="image1"
            alt="Taj Mahal"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <div class="card stylish-card">
        <div class="card-body">
          <h2 class="card-title">
            <nuxt-link to="/a">{{ title3 }}</nuxt-link>
          </h2>
          <img
            :src="image2"
            alt="Statue of Liberty"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </div>

    <div class="text-center">
      <nuxt-link to="/recipe" class="btn btn-primary stylish-button">{{ buttonLabel }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { useRankingData } from '~/composables/useRankingData';

export default {
  setup() {
    const {
      title,
      title2,
      title3,
      image1,
      image2,
      buttonLabel,
    } = useRankingData();

    return {
      title,
      title2,
      title3,
      image1,
      image2,
      buttonLabel,
    };
  },
};
</script>


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

<script>
export default {
  layout: 'default',
};
</script>
