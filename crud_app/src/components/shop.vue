<template>
    <navBar></navBar>
    <p>{{ title }}</p>
    <hr>
    <div class="cuerpo">
        <div class="body">
            <div class="productos">
                <producto></producto>
                <producto></producto>
            </div>
            <div class="carrito">
                <cart></cart>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from './navBar.vue';
import producto from './producto.vue';
import cart from './cart.vue'

export default {
    components: {
        'navBar': navBar,
        'producto': producto,
        'cart': cart
    },
    data() {
        return {
            title: 'Shop',
        }
    }
}
</script>

<style scoped>
p {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 140px;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.02em;
}

hr {
    width: 1085px;
    border: 1px solid #CED4DA;
}

table {
    padding-left: 50px;
}
.body {
    display: flex;
    justify-content: center;
}
.productos {
    padding-right: 70px;
}
.carrito {
    padding-left: 80px;
}

</style>