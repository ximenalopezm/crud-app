<template>
    <main>
        <div class="container h-100">
            <div class="row mt-5 align-items-center h-100">
                <div class="row align-items-md-stretch d-flexn pt-5 justify-content-center">
                    <div class="col-md-10 border rounded-4">
                        <article>
                            <div class="row d-flex justify-content-center">
                                <div class="col-sm-12 d-flex justify-content-center">
                                    <h1><b>WELCOME TO SISWEB</b></h1>
                                </div>
                                <div class="col-sm-12 d-flex justify-content-center">
                                    <p>Please, sign in</p>
                                </div>
                            </div>
                        </article>
                        <form>
                            <div class="row d-flex pt-5">
                                <div class="col-sm-12 ">
                                    <p>Username</p>
                                </div>
                                <div class="col">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="row d-flex pt-4">
                                <div class="col-sm-12">
                                    <p>Password</p>
                                </div>
                                <div class="col">
                                    <input type="password">
                                </div>
                                <div class="col-sm-12 d-flex justify-content-center pt-5">
                                    <button id="botonAcceso">
                                        <RouterLink to="/newProduct"> LOG IN</RouterLink>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

#botonAcceso {
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    width: 186px;
    height: 39px;
    background: #fff;
    border-radius: 4px;

}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFCFC;
    font-family: 'Inter', sans-serif;
    font-family: 'Source Sans Pro', sans-serif;

}

article {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    font-family: 'Inter', sans-serif;
    line-height: 36px;

}

article p {
    color: #B4B0B0;
}

form {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #343A40;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

button {
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    width: 186px;
    height: 39px;
    background: #7749F8;
    border-radius: 4px;
    border: #7749F8 solid 1px;
}

input {
    box-sizing: border-box;
    height: 39px;
    width: 315px;
    border: 1px solid #CED4DA;
    border-radius: 4px;
}
</style>