<template>
    <form>
        <div class="row">
            <div class="col-sm-6 mb-4">
                <label for="id" class="form-label">ID</label>
                <input type="text" class="form-control" v-model="id" disabled>
            </div>
            <div class="col-sm-6 mb-4">
                <label for="type" class="form-label">Tipo</label>
                <select type="text" class="form-select" v-model="type" required>
                    <option selected value="Cosmetic">Cosmetic</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Cleaning">Cleaning</option>
                </select>
            </div>
        </div>

        <div class="mb-4">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="name" required>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <label for="price" class="form-label">Price</label>
                <div class="input-group">
                    <input type="number" class="form-control" v-model="price" required>
                    <span class="input-group-text">USD$</span>
                </div>
            </div>
            <div class="col-sm-6">
                <label for="stock" class="form-label">Stock</label>
                <input type="number" class="form-control" v-model="stock" required>
            </div>
        </div>
    </form>
</template>

<script scoped>
export default {
    data() {
        return {
            id: '',
            type: '',
            price: null,
            stock: null
        }
    }
}
</script>