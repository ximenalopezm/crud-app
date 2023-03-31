<template>
    <div class="login">
        <div class="container">
            <form @submit.prevent="handleSubmit">
                <div class="container-titulo">
                    <h1>{{ title }}</h1>
                    <h2>{{ subtitle }}</h2>
                </div>
                <div class="container-preguntas">
                    <label>
                        <p>Username</p>
                        <input type="username" v-model="username" required />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" v-model="password" required />
                    </label>
                </div>
                <button><router-link to="/shop" id="signIn">SIGN IN</router-link></button>
            </form>
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            title: 'WELCOME TO SISWEB',
            subtitle: 'Please, sign in',
            username: '',
            password: '',
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.username, this.password)
        },
        pressEnter() {
            this.handleSubmit()
        },
    }
}
</script>

<style scoped>
input {
    width: 315px;
    height: 38px;
    border: solid #CED4DA 1px;
    border-radius: 4px;
}

input:hover {
    border: solid #7749F8 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 4px 8px 0 rgba(0, 0, 0, 0.24);
}

input:focus {
    outline: none;
    border: solid #7749F8 2px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 4px 8px 0 rgba(0, 0, 0, 0.24);
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

h1,
h2 {
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
    margin-top: 48px;
    transition-duration: 0.4s;
}
button:hover {
    transform: scale(1.1);
    background-color: #FFFFFF;
    border: solid #7749F8 1px;
    text-decoration-color: #7749F8;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

button:active {
    outline: #7749F8 5px;
}

button:hover #signIn {
    font-weight: 600;
    font-size: 16px;
    color: #7749F8;
    text-decoration-line: none;
}

#signIn {
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
}
</style>