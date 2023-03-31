<template>
    <form>
        <div class="card" id="imagenPh">
            <label for="image" class="form-label">Image</label>
            <img v-if="previewSrc" :src="previewSrc" class="card-img">
        </div>
        <div class="form-group mt-4">
            <input type="file" class="form-control form-control-sm" @change="previewImage">
        </div>
    </form>
</template>


<script scoped>
export default {
    data() {
        return {
            previewSrc: null,
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
#buttonCreate:hover {
    background-color: #fff;
    color: blueviolet;
}

#imagenPh {
    border: none;
}
</style>