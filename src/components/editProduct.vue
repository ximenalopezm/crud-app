
<script setup>
import navBar from './navBar.vue';
import editInputs from './editInputs.vue';
import imgPh from './imgPh.vue';
</script>

<template>
    <navBar />
    <div class="container mt-5">
        <h1>Edit Product</h1>
        <hr class="mt-4 mb-4">
        <div class="row">
            <div class="col-sm-4">
                <imgPh />
            </div>

            <div class="col-sm-7 ms-5">
                <editInputs />
            </div>
        </div>

        <hr class="mt-4">
        <div class=" d-flex flex-row-reverse mb-3">
            <button id="buttonCreate" type="submit" class="btn  btn-outline-light col-sm-1 me-5">
                UPDATE
            </button>
            <button type="submit" class="btn btn-secondary col-sm-1 me-5">
                CANCEL
            </button>
        </div>
    </div>
</template>

<style scoped>
#buttonCreate {
    background-color: blueviolet;
    color: #fff;
    border: blueviolet solid 1px;
}

#buttonCreate:hover {
    background-color: #fff;
    color: blueviolet;
}

#imagenPh {
    border: none;
}
</style>