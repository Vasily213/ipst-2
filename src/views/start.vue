<template>
    <component :is="views"></component>
</template>

<script>
import phonePage from "./phonePage";
import Home from "./Home";

export default {
    name: "start",
    components: {
        phonePage,
        Home
    },
    data: () => ({
        view: window.innerWidth
    }),
    created() {
        window.addEventListener('resize', (e) => {
            this.view = window.innerWidth
        })
    },
    computed: {
        views() {
            // return phonePage
            if (this.view < 1200) {
                return phonePage
            }
            return Home
        }
    }
}
</script>

<style scoped>

</style>