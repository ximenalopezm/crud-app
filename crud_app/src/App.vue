<template>
    <body>
        <signIn />
    </body>
</template>

<script>
    import signIn from './components/signIn.vue';
    import pageViewer from './components/pageViewer.vue';

    export default {
        components: {
            signIn,
            pageViewer
        },
        data() {
            return {
                inputs: [
                    {
                        link: {text: 'Sign In', url: 'index.html'},
                        pageTitle: 'Sign In to Sisweb',
                        content: 'This is the sign in content'
                    },
                    {
                        link: {text: 'Shop', url: 'shop.html'},
                        pageTitle: 'Shop in sisweb',
                        content: 'This is the shop content'
                    }
                ]
            }
        }
    }
</script>
