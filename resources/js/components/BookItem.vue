<template>
    <div class="book">
        <router-link :to="`/bookcatalog/${book.id}`" class="book-link-block">
            <img class="book-photo" :src="getImageUrl(book.imageFileName)" :alt="book.title">
            <span class="book-price">{{ book.price }}</span>
            <span class="book-title">{{ book.title }}</span>
            <span class="book-author">{{ book.author }}</span>
        </router-link>
        
        <div class="book-buttons">
            <MyButton>Заказать</MyButton>
            <button class="add-favorites-button" type="submit">
                <svg class="add-favorites-button-class" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3C4.23858 3 2 5.21619 2 7.95C2 10.157 2.87466 15.3947 11.4875 20.6903C11.7994 20.8821 12.2006 20.8821 12.5125 20.6903C21.1253 15.3947 22 10.157 22 7.95C22 5.21619 19.7614 3 17 3C14.2386 3 12 6 12 6C12 6 9.76142 3 7 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue';

export default {
    components: {
        MyButton
    },

    props: {
        book: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getImageUrl(imageFileName) {
            return new URL(`../assets/${imageFileName}`, import.meta.url).href;
        }
    }
}
</script>

<style scoped>
.book-link-block {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

.book {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 15px;
    background-color: #f8f8f8;
    border:  1px solid #eee;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.book-photo {
    width: 100%;
    height: 390px;
    object-fit: cover;
    margin-bottom: 10px;
}

.book-price {
    font-size: 26px;
    padding-top: 2px;
}

.book-price:after {
	content: ' \20BD';
}

.book-title {
    font-size: 24px;
    padding: 2px 0;
    font-weight: bold;
    transition: color 0.3s ease;
}

.book-title:hover {
    color: #B7CEB2;
}

.book-author {
    font-size: 14px;
    color: grey;
    padding: 2px 0;
}

.book-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.add-favorites-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.add-favorites-button-class {
    width: 40px;
    height: 45px;
    transition: transform 0.3s ease;
}

.add-favorites-button-class path {
    transition: stroke 0.3s ease;
}

.add-favorites-button-class:hover path {
    stroke: rgb(250, 84, 131);
}

.add-favorites-button-class:hover {
    transform: scale(1.1);
}
</style>