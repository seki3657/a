<template>
  <header>
    <div class="logo">My Logo</div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <!-- 他のヘッダー要素を追加 -->
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right