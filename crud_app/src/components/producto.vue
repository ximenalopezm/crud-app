<template>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/shopping-cart.css' rel='stylesheet'>
    <div class="container" id="componente">
        <div class="row">
            <div class="image">
                <img src="../../public/bottle.png">
            </div>
            <div class="info">
                <ul>
                    <li id="id">product id: {{ productid }}</li>
                    <li id="units">{{ product }} - {{ units }} u</li>
                    <li id="stock">in stock: {{ stock }} units</li>
                    <li id="price">{{ price }}</li>
                    <li id="qty">Qty: <input type="number" v-model="qty" required /></li>
                    <li id="add"><button><i class="gg-shopping-cart"></i>ADD TO CART</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productid: 'COS01',
            product: 'Sephora Skin Care',
            units: '1',
            stock: '4',
            price: '$45.50',
            qty: ''

        }
    }
}
</script>

<style scoped>
img {
    width: 250px;
    height: 225px;
    border: 1px solid #DEE2E6;
    border-radius: 10px;
}

.info {
    padding-left: 40px;
    margin-top: -22px;
    color: #152536;
}

ul {
    list-style-type: none;
    display: inline;
}

#componente {
    padding-top: 10px;
    padding-bottom: 24px;
    padding-left: 40px;
}

#id {
    padding-top: 3px;
    padding-bottom: 6px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
}

#units {
    padding-top: 0px;
    padding-bottom: 6px;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
}

#stock {
    padding-top: 0px;
    padding-bottom: 11px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
}

#price {
    padding-top: 0px;
    padding-bottom: 12px;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #7749F8;
}

#qty {
    padding-top: 0px;
    padding-bottom: 12px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
}

#qty input {
    width: 155px;
    height: 38px;
    border: 1px solid #CED4DA;
    border-radius: 4px;
}

#add button {
    display: flex;
    justify-content: center;
    padding-top: 7px;
    padding-bottom: 7px;
    width: 220px;
    height: 38px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    border: 1px solid #7749F8;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #7749F8;
}

#add i {
    padding-right: 30px;
    padding-left: 33.5px;
    width: 22.5px;
    height: 22.5px;
    color: #7749F8;
}
</style>