<template>
  <div class="wrap">
    <Header></Header>
    <main class="content">
      <router-view></router-view>
    </main>
    <Footer></Footer>
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
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrap {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;  
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 100px;
}
</style>