<template>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/shopping-cart.css' rel='stylesheet'>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/trash.css' rel='stylesheet'>
    <div class="container">
        <div class="first-row">
            <i class="gg-shopping-cart"></i>
            <p>{{ title }}</p>
        </div>
        <hr>
        <div class="tabla">
            <table>
                <tr id="second-row">
                    <td><input type="checkbox" id="option1"></td>
                    <td><label for="option1">2</label></td>
                    <td>
                        <p>{{ product1 }}</p>
                    </td>
                    <td>
                        <p><b>{{ price1 }}</b></p>
                    </td>
                </tr>
                <tr id="third-row">
                    <td><input type="checkbox" id="option2"></td>
                    <td><label for="option2">1</label></td>
                    <td>
                        <p>{{ product2 }}</p>
                    </td>
                    <td>
                        <p><b>{{ price2 }}</b></p>
                    </td>
                </tr>
            </table>
        </div>
        <hr>
        <div class="tabla2">
            <table>
                <tr class="fourth-row">
                    <td><i class="gg-trash"></i></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <p><b>TOTAL</b></p>
                    </td>
                    <td>
                        <p><b>{{ total }}</b></p>
                    </td>
                </tr>
            </table>
        </div>
        <div class="boton">
            <button>CHECKOUT</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'SHOPPING CART',
            product1: 'Sephora Skin Care - 1 u',
            product2: 'Dior Face Beauty - 1 u',
            price1: '$91.00',
            price2: '$50.00',
            total: '$141.00'
        }
    }
}
</script>

<style scoped>
.container {
    width: 388px;
    height: 325px;
    background: rgba(217, 217, 217, 0.2);
    display: flexbox;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
}

.first-row,
.second-row,
.third-row,
.fourth-row {
    display: flex;
}

hr {
    margin-top: -2px;
    height: 0px;
    border: 1px solid #CED4DA;
}

td {
    padding-left: 22px;
}

.first-row {
    padding-top: 15px;
    padding-bottom: 0px;
    padding-left: 5px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #7749F8;
}

.first-row i {
    padding-left: 30px;
}

.second-row,
.third-row {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #152536;
}

.fourth-row p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    text-align: right;
    color: #152536;
}

.fourth-row i {
    color: #7749F8;
}

button {
    font-weight: 600;
    font-size: 18px;
    color: #7749F8;
    line-height: 22px;
    width: 159px;
    height: 38px;
    border: 1px solid #7749F8;
    border-radius: 5px;
}

.boton {
    padding-top: 40px;
    text-align: right;
}
</style>