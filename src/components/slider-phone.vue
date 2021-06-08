<template>
    <div class="slider">
        <carousel-3d :width="780" :height="520">
            <slide  :index="0">
                <img class="slider-image-1"
                     src="../assets/img/image-3.png"
                     alt="">
            </slide>
            <slide :index="1">
                <img class="slider-image-1"
                     src="../assets/img/image-3.png"
                     alt="">
            </slide>
            <slide :index="2">
                <img class="slider-image-1"
                     src="../assets/img/image-3.png"
                     alt="">
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
name: "slider-phone",
    components: {
        Carousel3d,
        Slide
    }
}
</script>

<style scoped>

</style>