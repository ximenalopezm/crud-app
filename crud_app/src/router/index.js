import { createRouter, createWebHistory } from 'vue-router'
import signIn from '../components/signIn.vue'
import shop from '../components/shop.vue'
import cart from '../components/cart.vue'

const routes = [
    {
        path: '/',
        name: 'Sign In',
        component: signIn
    },
    {
        path: '/shop',
        name: 'Shop',
        component: shop
    },
    {
        path: '/cart',
        name: 'Cart',
        component: cart
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router