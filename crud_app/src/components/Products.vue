<script setup>
    import {ref} from "vue";
    import navBar from "./navBar.vue";
    import products from "../data/products.json"
    import 'boxicons'

    const title = ref('Products')

    const AllProducts = ref(products)
    const showModal = ref(false)

    const addProduct = () => {
        AllProducts.value.push({
            id: "COS01",
            type: "Cosmetic",
            name: "Sephora Skin Care - 1u",
            price: 45.50,
            in_stock: 4,
            image: null
        })
        showModal.value = false
    }

    const delete_item = () => {

    }

</script>

<template>
    <navBar/>
    <div v-show="showModal" class="overlay">
        <div class="modal">
            <div>
                <h5>Delete Product</h5>
                
            </div>
            <div>
                <p class="del_txt">Are you sure you want to delete this product?</p>
            </div>
            <div class="del_btns">
                <button @click="showModal=false" class="del_btn1">CANCEL</button>
                <button @click="delete_item(), showModal=false" class="del_btn1">DELETE</button>
            </div>
        </div>
    </div>

    <div>
        <p>{{title}}</p>
        <hr>
        <button class="AddProduct" @click="addProduct()">ADD PRODUCT</button>
    </div>

    <div class="table">
        <tr>
            <td class="id"><strong>ID</strong></td>
            <td class="type"><strong>TYPE</strong></td>
            <td class="name"><strong>NAME</strong></td>
            <td class="price"><strong>PRICE</strong></td>
            <td class="in_stock"><strong>IN STOCK</strong></td>
            <td class="image"><strong>IMAGE</strong></td>
            <td></td>
            <td></td>
        </tr>
        <tr v-for="product in products">
            <td class="id"><strong>{{ product.id }}</strong></td>
            <td class="type">{{product.type}}</td>
            <td class="name">{{product.name}}</td>
            <td class="price">${{product.price}}</td>
            <td class="in_stock">{{ product.in_stock }}</td>
            <td><button class="image_btn"><box-icon name='image' animation="tada-hover"></box-icon></button></td>
            <td><button class="edit"><box-icon name="pencil" animation="tada-hover"></box-icon></button></td>
            <td><button class="delete" @click="showModal=true"><box-icon name="trash" animation="tada-hover"></box-icon></button></td>
        </tr>
    </div>
</template>

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

    .del_txt{
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        font-weight: 100;
        font-size: 15px;
        color: grey;
    }

    .del_btns{
        display: flex;
        justify-content: flex-end;
    }

    .del_btn1{
        margin-left: 2em;
    }

    button{
        font-weight: 600;
        font-size: 18px;
        background-color: white;
        color: #7749F8;
        line-height: 22px;
        width: 159px;
        height: 38px;
        border: 1px solid #7749F8;
        border-radius: 5px;
    }


    .id, .type, .name{
        padding-right: 80px;
    }

    .price, .in_stock, .image{
        padding-right: 40px;
    }

    .AddProduct {
        margin-left: 140px;
    }

    .table{
        margin-top: 16px;
        margin-bottom: 16px;
        margin-left: 140px;
        width: auto;
    }

    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.77);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal{
        width: 750px;
        height: 200px;
        background-color: white;
        border-radius: 10px;
        padding: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .delete, .edit, .image_btn{
        width: 50px;
        border: none;
        background-color: white;
    }

    .in_stock{
        text-align: center;
    }
</style>