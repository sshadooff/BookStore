<template>
    <div class="footer-class">
        <img src="@/assets/logo.png" alt="logo">
        <p>&copy; Книжный магазин "Ремарк`а", 2025</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-class {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #eee;
    text-align: center;
}

.footer-class img {
    height: 150px;
}

.footer-class p {
    padding: 50px;
    margin: 0;
}
</style>