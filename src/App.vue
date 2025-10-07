<template>
  <div class="wrap">
    <Header></Header>
    <main class="content">
      <router-view :books="books"></router-view>
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

  data() {
    return {
      books: [
        {
          id: 1,
          title: "Алые паруса",
          author: "Александр Грин",
          price: 500,
          imageFileName: "AlyeParusa.png",
          description: "Описание"
        },
        {
          id: 2,
          title: "Маленький принц",
          author: "Антуан де Сент-Экзюпери",
          price: 700,
          imageFileName: "Malen'kijPrinc.jpg",
          description: "Описание"
        },
        {
          id: 3,
          title: "451 градус по Фаренгейту",
          author: "Рэй Брэдбери",
          price: 800,
          imageFileName: "451GradusPoFarengejtu.jpg",
          description: "Описание"
        },
        {
          id: 4,
          title: "1984",
          author: "Джордж Оруэлл",
          price: 700,
          imageFileName: "1984.jpg",
          description: "Описание"
        },
        {
          id: 5,
          title: "Под куполом",
          author: "Стивен Кинг",
          price: 900,
          imageFileName: "PodKupolom.jpg",
          description: "Описание"
        },
      ]
    }
  }
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