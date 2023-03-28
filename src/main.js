import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import logIn from './components/logIn.vue'
import navBar from './components/navBar.vue'
import newProduct from './components/newProduct.vue'
import products from './components/products.vue'

const app = createApp(App)

const routes = [
    {
        path:'/', component: logIn,
    },
    {
        path:'/navBar', component: navBar,
    },
    {
        path:'/newProduct', component: newProduct,
    },
    {
        path:'/products', component: products,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  }) 

app.use(router)

app.mount('#app')
