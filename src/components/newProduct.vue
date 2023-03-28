
<script setup>
import navBar from './navBar.vue';
</script>


<template>
    <navBar />

    <div class="container mt-5">
        <h1>New Product</h1>
        <div class="row">

            <div class="col-md-8">

                <form @submit.prevent="agregarProducto">

                    <div class="col-md-4">
                        <div>
                            <div class="card">
                                <img v-if="previewSrc" :src="previewSrc" class="card-img-top" alt="Preview">
                            </div>

                            <div class="form-group">
                                <label for="image">Imagen:</label>
                                <input type="file" class="form-control-file" id="image" @change="previewImage">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" value="COS" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="type" class="form-label">Tipo</label>
                        <select type="text" class="form-select" id="type" required>
                            <option selected value="Cosmetic">Cosmetic</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Cleaning">Cleaning</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="price">Precio</label>
                        <input type="number" class="form-control" id="price" required>
                    </div>
                    <div class="mb-3">
                        <label for="stock">Stock</label>
                        <input type="number" class="form-control" id="stock" required>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        CREATE
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            previewSrc: null
        }
    },
    methods: {
        agregarProducto() {
            var tablaProductos = JSON.parse(localStorage.getItem("tablaProductos"));
            if (tablaProductos == null) {
                var tablaProductos = [];
            }

            var idProducto = JSON.parse(localStorage.getItem("idProducto"));
            if (idProducto == null) {
                var idProducto = 0;
            }

            function send() {
                var procuct = JSON.stringify({
                id: (idProducto > 0) ? idProducto : (tablaProductos.length + 1),
                type: document.getElementById("type").value,
                name: document.getElementById("name").value,
                price: document.getElementById("price").value,
                stock: document.getElementById("stock").value,
                });
                console.log(procuct);

                if (idProducto > 0) {
                    for (const i in tablaProductos) {
                        var varProduct = JSON.pars(tablaProductos[i]);
                        if (varProduct.id == idProducto) {
                            tablaProductos[i] = procuct;
                            break;
                        } 
                    }
                } else {
                    tablaProductos.push(procuct);
                }
                localStorage.setItem("tablaProductos", JSON.stringify(tablaProductos));
            }
        },

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