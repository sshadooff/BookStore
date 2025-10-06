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

    props: {
        books: {
            type: Array,
            required: true
        }
    },
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