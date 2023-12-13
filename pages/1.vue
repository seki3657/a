<template>
  <div>
    <Header />
    
    <main>
      <h1>トップページ</h1>
      <p>ここにページコンテンツが入ります。</p>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
