<!-- Header.vue -->

<template>
  <header>
    <div class="logo">
      <!-- ロゴやアイコンの表示 -->
      <img src="/path/to/logo.png" alt="Logo" />
    </div>
    <nav>
      <!-- ナビゲーションメニュー -->
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        <!-- 他のメニューアイテムを追加 -->
      </ul>
    </nav>
  </header>
</template>

<script>
// コンポーネントのロジックやデータがあればここに記述
export default {
  // コンポーネントのプロパティやメソッドなど
};
</script>

<style scoped>
/* ヘッダーのスタイリングがあればここに記述 */
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

.logo img {
  max-width: 100px; /* ロゴの最大幅を指定 */
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
