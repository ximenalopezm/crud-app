
<script setup>
import navBar from './navBar.vue';
</script>

<template>
  <navBar />
  <div>
    <h1>Imagen guardada en localStorage</h1>
    <img :src="imageDataURL" alt="Imagen guardada en localStorage">
  </div>
</template>


<script>
export default {
  data() {
    return {
      imageDataURL: ""
    };
  },
  created() {
    this.imageDataURL = localStorage.getItem("image");
  }
};
</script>
