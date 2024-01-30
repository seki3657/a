<template>
  <div>
    <div class="container mt-4">
      <h1 class="mb-4">{{ title }}</h1>
      <img
        src="https://thumb.photo-ac.com/b9/b92f7ddb7e2f121217fea880c31d023c_t.jpeg"
        alt="Recipe Image"
        class="img-fluid rounded"
      />
      <div class="mb-4">
        <h3 class="mb-4">{{ title2 }}</h3>
      </div>
      <!-- CustomComponent を追加 -->
      <CustomComponent />
      <div class="mb-4">
        <nuxt-link to="/" class="btn btn-primary">戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style scoped>

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

