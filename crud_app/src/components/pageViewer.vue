<template>
    <div class="container">
        <a href="#/">Sign in</a>
        <h1 class="empasize">Page Title</h1>
        <p>content</p>
    </div>
</template>

<script>
    export default {
        signIn() {
            console.log(this.$route.params)
        }
    }
</script>