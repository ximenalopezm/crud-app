<template>
    <component :is="currentView" />
</template>

<script>
    import signIn from './components/signIn.vue';
    import pageViewer from './components/pageViewer.vue';

    const routes = {
    '/': signIn,
    '/pageViewer': pageViewer
    }

    export default {
    data() {
        return {
        currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
        return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
            })
    }
    }
</script>
