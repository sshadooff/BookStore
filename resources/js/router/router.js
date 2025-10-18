import MainPage from "@/pages/MainPage.vue"
import LoginPage from "@/pages/LoginPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import AboutBookPage from "@/pages/AboutBookPage.vue";
import FavoritesPage from "@/pages/FavoritesPage.vue";
import BookCatalogPage from "@/pages/BookCatalogPage.vue";
import {createRouter, createWebHistory} from "vue-router"


const routes = [
    {
        path: '/',
        component: MainPage,
        meta: { title: 'Главная' }
    },
    {
        path: '/bookcatalog',
        component: BookCatalogPage,
        meta: { title: 'Книжный каталог' }
    },
    {
        path: '/login',
        component: LoginPage,
        meta: { title: 'Вход в личный кабинет' }
    },
    {
        path: '/register',
        component: RegisterPage,
        meta: { title: 'Регистрация' }
    },
    {
        path: '/favorites',
        component: FavoritesPage,
        meta: { title: 'Избранное' }
    },
    {
        path: '/basket',
        component: BasketPage,
        meta: { title: 'Корзина' }
    },
    {
        path: '/bookcatalog/:id',
        component: AboutBookPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = 'Книжный магазин';
    }
});

export default router;