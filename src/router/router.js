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
    },
    {
        path: '/bookcatalog',
        component: BookCatalogPage, 
    },
    {
        path: '/login',
        component: LoginPage, 
    },
    {
        path: '/register',
        component: RegisterPage, 
    },
    {
        path: '/favorites',
        component: FavoritesPage, 
    },
    {
        path: '/basket',
        component: BasketPage, 
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

export default router;