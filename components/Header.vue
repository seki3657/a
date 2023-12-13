<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // コンポーネントのロジックがあればここに記述
};
</script>

<style scoped>
/* ヘッダーのスタイリングがあればここに記述 */
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: white;
}
</style>
