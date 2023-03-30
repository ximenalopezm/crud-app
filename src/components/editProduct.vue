
<script setup>
    import navBar from './navBar.vue';
</script>

<template>
    <navBar />
    <div class="container mt-5">
        <h1>Edit Product</h1>
        <hr class="mt-4 mb-4">
        <div class="row">
            <div class="col-sm-4">
                <form>
                    <div class="card" id="imagenPh">
                        <label for="image" class="form-label">Image</label>
                        <img v-if="previewSrc" :src="previewSrc" class="card-img">
                    </div>
                    <div class="form-group mt-4">
                        <input type="file" class="form-control form-control-sm" @change="previewImage">
                    </div>
                </form>
            </div>

            <div class="col-sm-7 ms-5">
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
        previewImage(event) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = (e) => {
                var img = new Image();
                img.onload = () => {
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    var dataURL = canvas.toDataURL();
                    localStorage.setItem('image', dataURL);
                    this.previewSrc = dataURL;
                }
                img.src = e.target.result;
            }

            if (file) {
                reader.readAsDataURL(file);
            } else {
                this.previewSrc = null;
            }
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

#buttonCreate:hover {
    background-color: #fff;
    color: blueviolet;
}

#imagenPh {
    border: none;
}
</style>