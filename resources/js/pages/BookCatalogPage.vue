<template>
    <div class="book-catalog">
        <BookItem v-for="bookItem in books" :book="bookItem"></BookItem>
    </div>
</template>

<script>
import BookItem from '@/components/BookItem.vue';

export default {
    components: {
        BookItem
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

<style scoped>
.book-catalog {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
</style>