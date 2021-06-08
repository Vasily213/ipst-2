<template>
    <div>
        <carousel-3d :controlsVisible="true" :width="700" :height="460" :display="3">
            <slide  :index="0">
                <img class="slider-image-1"
                     src="../assets/img/image-3.png"
                     alt="">
            </slide>
            <slide  :index="1">
                <img class="slider-image-1"
                     src="../assets/img/slide-1.jpg"
                     alt="">
            </slide>
            <slide :index="2">
                <img class="slider-image-1"
                     src="../assets/img/slide-2.jpg"
                     alt="">
            </slide>
            <slide :index="3">
                <img class="slider-image-1"
                     src="../assets/img/slide-3.jpg"
                     alt="">
            </slide>
            <slide :index="4">
                <img class="slider-image-1"
                     src="../assets/img/slide-4.jpg"
                     alt="">
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
name: "slider",
    components: {
        Carousel3d,
        Slide
    }
}
</script>

<style scoped>

</style>