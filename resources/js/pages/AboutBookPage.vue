<template>
    <div class="about-book-page">
        <p>Это страница книги с ID = {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.about-book-page {
    padding: 15px;
    width: 20%;
    font-size: 20px;
    background-color: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 8px;
    text-align: center;
}
</style>