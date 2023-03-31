
<template>
    <nav class="navbar navbar-expand" style="background-color: blueviolet;">
        <div class="container-fluid">
            <h3 class="pt-2"> <strong>SISWEB</strong></h3>

            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <button class="btn btn-md">
                        <a class="nav-link text-light" href="#"> {{ button1 }}</a>
                    </button>
                </li>

                <li class="nav-item pe-5">
                    <button class="btn btn-md ms-3">
                        <a class="nav-link text-light" href="#"> {{ button2 }}</a>
                    </button>
                </li>

                <li class="nav-item pe-5">
                    <button class="btn btn-outline-light btn-md ms-3" id="buttonlogOut">
                        <a class="nav-link" href="#" id="reflogOut"> {{ button3 }}</a>
                    </button>
                </li>
            </ul>

        </div>
    </nav>
</template>


<script scoped>
export default {
    data() {
        return {
            button1: 'Shop',
            button2: 'Products',
            button3: 'Log out'
        }
    }
}
</script>

<style scoped>
h3 {
    color: white;
    padding-left: 5em;
}

button {
    background-color: blueviolet;
}

#buttonlogOut {
    margin-right: 5em;
}

#reflogOut {
    color: white;
}

#reflogOut:hover {
    color: blueviolet;
}
</style>

