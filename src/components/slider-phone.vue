<template>
    <div class="slider-phone">
        <carousel-3d :height="170">
            <slide :index="0">
                <img class="slider-image-1"
                     src="../assets/img/phone/phone-slider-5.jpg"
                     alt="">
            </slide>
            <slide :index="1">
                <img class="slider-image-1"
                     src="../assets/img/phone/phone-slide-1.jpg"
                     alt="">
            </slide>
            <slide :index="2">
                <img class="slider-image-1"
                     src="../assets/img/phone/phone-slide-2.jpg"
                     alt="">
            </slide>
            <slide :index="3">
                <img class="slider-image-1"
                     src="../assets/img/phone/phone-slide-3.jpg"
                     alt="">
            </slide>
            <slide :index="4">
                <img class="slider-image-1"
                     src="../assets/img/phone/phone-slide-4.jpg"
                     alt="">
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';

export default {
    name: "slider-phone",
    components: {
        Carousel3d,
        Slide
    }
}
</script>

<style scoped>
.slider-phone {
    width: 100%;
}
</style>