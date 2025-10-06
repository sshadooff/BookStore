import MainPage from "@/pages/MainPage.vue"
import BookCatalogPage from "@/pages/BookCatalogPage.vue";
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: MainPage, 
    },
    {
        path: '/bookcatalog/',
        component: BookCatalogPage, 
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;