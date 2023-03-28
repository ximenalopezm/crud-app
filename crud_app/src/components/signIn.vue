<template>
    <div class="login">
        <div class="container">
            <form @submit.prevent="handleSubmit">
                <div class="container-titulo">
                    <h1>{{ title }}</h1>
                    <h2>{{ subtitle }}</h2>
                </div>
                <div class="container-preguntas">
                    <label><p>Username</p>
                    <input type="username" v-model="username" /></label>
                    <label><p>Password</p>
                    <input type="password" v-model="password" /></label>
                </div>
                <button>SIGN IN</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'WELCOME TO SISWEB',
            subtitle: 'Please, sign in',
            username: '',
            password: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.username, this.password)
        }
    }
}
</script>

<style>
    input {
        width: 315px;
        height: 38px;
        border: solid #CED4DA 1px;
        border-radius: 4px;
    }

    .container {
        background-color: #FFFCFC;
        width: 792px;
        height: 464px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login {
        background-color: #7749F8;
        min-height: 100vh;
        text-align: center;
        padding: 70px 0;
    }

    h1, h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: -0.02em;
    }

    h2 {
        color: #B4B0B0;
        font-weight: 500;
        font-size: 20px;
        margin-top: -10px;
    }

    p {
        text-align: left;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 5px;
        font-weight: 500;
    }

    label {
        display: block;
    }

    .container-titulo {
        padding-bottom: 41px;
    }

    button {
        width: 186px;
        height: 39px;
        background: #7749F8;
        border-radius: 4px;
        border: none;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        margin-top: 48px;
    }
</style>