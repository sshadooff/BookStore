<template>
    <div class="main-content">
        <h2>Объявления</h2>
        <div class="advertisement-one">
            <h3 class="advertisement-title">Мы открылись!</h3>
            <p class="advertisement-text">Отличная новость для всех книголюбов!</p>
            <p class="advertisement-text"> Книжный магазин "Ремарк'а" с радостью объявляет об открытии нашего нового веб-сайта! Теперь вы можете с легкостью ознакомиться с полным ассортиментом книг, проверить наличие нужного издания в наших магазинах, оформить онлайн-заказ с доставкой или самовывозом, а также добавить любимые книги в избранное для удобного доступа. Погрузитесь в мир литературы с "Ремарк'а" в любое время и в любом месте!</p>
            <p class="advertisement-date">Дата: 06.10.2025</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-content h2 {
    margin-bottom: 20px;
}

.advertisement-one {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 10px 20px;
    background-color: #f8f8f8;
    border:  1px solid #eee;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.advertisement-one:hover {
    transform: scale(1.03);
    box-shadow: 0 2px 5px #B7CEB2;
}

.advertisement-title {
    margin: 0;
    padding: 10px;
    text-transform: uppercase;
    text-align: center;
}

.advertisement-text {
    margin: 0;
    padding: 5px;
    text-align: justify;
}

.advertisement-date {
    margin: 0;
    padding: 5px;
    text-align: left;
}
</style>