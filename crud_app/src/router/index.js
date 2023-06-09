import { createRouter, createWebHistory } from 'vue-router'
import signIn from '../components/signIn.vue'
import shop from '../components/shop.vue'
import cart from '../components/cart.vue'
import Products from '../components/Products.vue'
import newProduct from '../components/newProduct.vue'
import editProduct from '../components/editProduct.vue'

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
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/newProduct',
        name: 'newProduct',
        component: newProduct
    },
    {
        path: '/editProduct',
        name: 'editProduct',
        component: editProduct
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router