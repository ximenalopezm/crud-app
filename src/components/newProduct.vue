
<script setup>
import navBar from './navBar.vue';
import newInputs from './newInputs.vue';
import imgPh from './imgPh.vue';
</script>

<template>
    <navBar />
    <div class="container mt-5">
        <h1>New Product</h1>
        <hr class="mt-4 mb-4">
        <div class="row">
            <div class="col-sm-4">
                <imgPh />
            </div>

            <div class="col-sm-7 ms-5">
                <newInputs />
            </div>
        </div>

        <hr class="mt-4">
        <div class=" d-flex flex-row-reverse">
            <button id="buttonCreate" type="buttom" class="btn  btn-outline-light col-sm-1 me-5" @click="alerta()">
                CREATE
            </button>
            <button type="submit" class="btn btn-secondary col-sm-1 me-5">
                CANCEL
            </button>
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            previewSrc: null,
            id: '',
            type: '',
            price: null,
            stock: null
        }
    },
    methods: {
        alerta(event) {
            Swal.fire({
                title: "You want to add this product?",
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No`,
            })
        }
    }
}

</script> 

<style scoped>
#buttonCreate {
    background-color: blueviolet;
    color: #fff;
    border: blueviolet solid 1px;
}
</style>