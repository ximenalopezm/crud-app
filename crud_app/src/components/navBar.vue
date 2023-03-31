<template>
    <nav class="navBar-container">
        <div class="row">
            <h1>{{ title }}</h1>
            <ul>
                <li>
                    <router-link to="/products" class="router" id="products">Products</router-link>
                </li>
                <li>
                    <router-link to="/shop" class="router" id="shop">Shop</router-link>
                </li>
                <li>
                    <router-link to="/" class="router" id="logout">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            title: 'SISWEB',
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    text-align: center;
    justify-content: end;
    padding-left: 620px;
    padding-top: 18px;
    padding-bottom: 18px;
}

li {
    display: inline;
    padding-left: 43px;
}

.router {
    color: #FFFFFF;
    text-align: right;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
}

.row {
    background-color: #7749F8;
    width: 1440px;
    height: 60px
}

h1 {
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    width: 90px;
    height: 28px;
    color: #FFFFFF;
    padding-left: 166px;
    padding-top: 16px;
    padding-bottom: 16px;
}

#logout {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 6px;
    padding-bottom: 8px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
}

#shop {
    padding-right: 40px;
}
</style>