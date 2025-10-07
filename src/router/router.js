import MainPage from "@/pages/MainPage.vue"
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
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
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;