<template>
    <div id="app-phone">
        <transition name="prompt">
            <div class="navigation" v-if="nav">
                <div class="navigation-box">
                    <div class="navigation-item"
                         @click="nav=false"
                         v-bind:class="{active: activeSection == 0}"
                         v-on:click="scrollToSection(0)">
                        <img width="100" height="50" src="../assets/img/logo_header.png" alt="">
                    </div>
                    <div class="navigation-item"
                         @click="nav=false"
                         v-bind:class="{active: activeSection == 1}"
                         v-on:click="scrollToSection(1)"
                    >
                        About us
                    </div>
                    <div class="navigation-item"
                         @click="nav=false"
                         v-bind:class="{active: activeSection == 2}"
                         v-on:click="scrollToSection(2)"
                    >
                        mission
                    </div>
                    <div class="navigation-item"
                         @click="nav=false"
                         v-bind:class="{active: activeSection == 3}"
                         v-on:click="scrollToSection(3)"
                    >
                        team
                    </div>
                    <div class="navigation-item"
                         @click="nav=false"
                         v-bind:class="{active: activeSection == 4}"
                         v-on:click="scrollToSection(4)"
                    >
                        contact us
                    </div>
                </div>
            </div>
        </transition>
        <section id="section-1">
            <header>
                <div style="display: flex;justify-content: space-around;">
                    <div class="">
                        <img width="100" height="50" src="../assets/img/logo_header.png" alt="">
                    </div>
                    <div class="menu" @click="nav=true">
                        <div class="menu-item"></div>
                        <div class="menu-item"></div>
                        <div class="menu-item"></div>
                    </div>
                </div>
            </header>
            <div class="section-1">
                <p class="section-p-header">WE ARE <br> THE CREATORS of</p>
                <div class="section-1-list">
                <span class="section-1-list-item">
                    IT solutions
                </span>
                    <div class="dash"></div>
                    <span class="section-1-list-item">
                    your unique technology
                </span>
                    <div class="dash"></div>
                    <span class="section-1-list-item">
                    positive changes in your business <br> and your life
                </span>
                </div>
                <img class="computer-1" src="../assets/img/phone/computer-1.png" alt="">
                <div>
                    <button
                        class="section-1-btn"
                        @click="nav=false"
                        v-bind:class="{active: activeSection == 4}"
                        v-on:click="scrollToSection(4)"
                    >CONTACT US</button>
                </div>
            </div>
        </section>
        <section id="section-2">
            <div class="section-2">
                <div class="logo-2">
                    <div>
                        <svg class="svg-logo" width="50" height="50" viewBox="0 0 122 127" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.3431 74.8284L12.5149 22.5434L68.0335 21.4617L25.3431 74.8284Z"
                                fill="#BFBFBF"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M92.2178 86.3669L115 40.9331L102.172 101.367L92.2178 86.3669Z"
                                fill="#BFBFBF"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M2 83.6993L25.3431 74.8289L48.6861 123.075L2 83.6993Z"
                                  fill="#89BF6B" stroke="white"
                                  stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M12.5149 22.544L66.9119 3.00024L68.0335 21.4622L12.5149 22.544Z"
                                fill="#89BF6B"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M25.3431 74.8284L68.0335 21.4617L92.2178 86.3672L25.3431 74.8284Z"
                                fill="#325058"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M66.9119 3.00024L68.0335 21.4622L115 40.9339L66.9119 3.00024Z"
                                fill="#325058"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M12.5149 22.5442L25.3431 74.8292L2 83.6996L12.5149 22.5442Z"
                                fill="#58A0A3"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M92.2877 85.9342L114.72 41.0773L68.3839 21.822L92.2877 85.9342Z"
                                fill="#58A0A3"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M25.3431 74.8289L48.6861 123.075L92.2178 86.3676L25.3431 74.8289Z"
                                fill="#58A0A3"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                            <path
                                d="M48.6862 123.075L92.2178 86.3677L102.172 101.368L48.6862 123.075Z"
                                fill="#89BF6B"
                                stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                    <div class="logo-2-img">
                        <img height="30" width="100" alt="33" src="../assets/img/ipst-1.png">
                    </div>
                </div>
                <div class="about">
                    <div style="display: flex; justify-content: normal;">
                        <div style="margin: 0 -4.5rem 0 -2rem;">
                            <span class="navigation-app-1">ABOUT US</span>
                        </div>

                        <div class="vector">
                            <img alt="" src="../assets/img/phone/vector.png">
                        </div>
                    </div>

                    <div class="text-vector">
                        <p class="text-vector-p">
                            <b>IPST</b> – is a Melbourne-based <br> company, specializing in
                            <br> development and <br> implementation of IT-solutions.
                        </p>
                        <p class="text-vector-p">
                            We implement machine learning <br> in our projects and provide
                            <br> projects that capable of <br> cross-platforming.
                        </p>
                        <p class="text-vector-p">
                            We have our own development <br> hub in Tomsk, Russia. Tomsk is
                            <br> the student’s capital of Russia, <br> because there are the largest
                            <br> number of universities and <br> educational institutions per <br> capita.
                        </p>

                    </div>
                    <div style="display: flex; justify-content: center;">
                        <img src="../assets/img/phone/computer-2.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section id="section-3">
            <div class="section-3">
                <p class="about-p">
                    You can come to us with a <br> project frozen at any stage or
                    <br>just with an idea, and we will <br> bring all your wishes to life.
                </p>
                <div class=" participants-1">
                    <div class="">
                        <div class="circles">
                            <img src="../assets/img/phone/circle-1.png" alt="">
                        </div>
                        <div class="wand"></div>
                        <div class="circles">
                            <img src="../assets/img/phone/circle-2.png" alt="">
                        </div>
                        <div class="wand"></div>
                        <div class="circles">
                            <img src="../assets/img/phone/circle-3.png" alt="">
                        </div>
                        <div class="wand"></div>
                        <div class="circles">
                            <img src="../assets/img/phone/circle-4.png" alt="">
                        </div>
                        <div class="wand"></div>
                        <div class="circles">
                            <img src="../assets/img/phone/circle-5.png" alt="">
                        </div>
                        <div class="wand"></div>
                        <div class="circles">
                            <img src="../assets/img/phone/circle-6.png" alt="">
                        </div>
                    </div>
                    <div class="">
                        <p class="participants-p">Analysis</p>
                        <p class="participants-p">Design</p>
                        <p class="participants-p">Implementation</p>
                        <p class="participants-p">Quality assurance</p>
                        <p class="participants-p">Deployment</p>
                        <p class="participants-p">Support and<br> maintenance</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-top: 30px">
                    <img src="../assets/img/phone/computer-3.png" alt="">
                </div>
                <div class="section-3-text">
                    <div style="margin: 0 -6rem 0 -3.2rem;">
                        <span class="navigation-app-2">OUR MISSION</span>
                    </div>
                    <div class="description">
                        <div class="section-3-section">
                            <p class="description-p">We create with passion</p>
                            <p class="description-p-2">
                                We make not only working <br> but valuable products. You
                                <br> will receive a solution that <br> will cover all your real needs
                                <br> with the style and <br> innovation.
                            </p>
                            <p class="description-p">We are continuously<br> learning</p>
                            <p class="description-p-2">
                                Every day our developers <br> research new technologies <br>
                                according to their role in <br> order to make your product <br>
                                more and more modern, <br> fulfilling and profitable.
                            </p>
                            <p class="description-p">Time keeps pace <br> with us</p>
                            <p class="description-p-2">
                                We were born in the digital <br> world. Our generation enjoys <br>
                                working in collaborative <br> environments and being <br>
                                creative. We explore, learn <br> and use the most of modern <br>
                                functional tools, so why we <br> are always up to date with <br>
                                news in the global IT-industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center;">
                    <img src="../assets/img/phone/computer-4.png" alt="">
                </div>
            </div>
            <div class="section-4">
                <p class="section-4-text">OUR TEAM</p>
                <slider-phone></slider-phone>
                <p class="section-4-p">
                    We dream to be proud <br> of the positive changes <br>
                    that we will implement <br> to your business.
                </p>
            </div>
        </section>
        <section id="section-5">
            <div class="section-5">
                <div class="form-text">
                    <p class="form-text-p">TELL US ABOUT YOUR<br> PROJECT</p>
                    <div style="display: flex;justify-content: center;">
                        <div class="form-text-hr"></div>
                    </div>
                    <contact-form-phone></contact-form-phone>
                </div>
            </div>
            <div class="section-6">
                <div>
                    <p class="section-6-p-1">
                        Flat 26, 38 Chapman Street North <br> Melbourne VIC 3051
                    </p>
                </div>
                <div>
                    <img width="30" src="../assets/img/logo-1.png" alt="">
                </div>
                <p class="section-6-p-2">
                    copyright IPST© 2021
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import SliderPhone from "../components/slider-phone";
import ContactFormPhone from "../components/contact-form-phone";

export default {
    name: "phonePage",
    components: {
        ContactFormPhone,
        SliderPhone
    },
    data: () => ({
        nav: false,
        inMove: false,
        activeSection: 0,
        offsets: [],
        touchStartY: 0
    }),
    created() {
    },
    methods: {
        calculateSectionOffsets() {
            let sections = document.getElementsByTagName('section');
            let length = sections.length;

            for (let i = 0; i < length; i++) {
                let sectionOffset = sections[i].offsetTop;
                this.offsets.push(sectionOffset);
            }
        },
        handleMouseWheel: function (e) {
            if (e.wheelDelta < 30 && !this.inMove) {
                this.moveUp();
            } else if (e.wheelDelta > 30 && !this.inMove) {
                this.moveDown();
            }

            e.preventDefault();
            return false;
        },
        handleMouseWheelDOM: function (e) {
            if (e.detail > 0 && !this.inMove) {
                this.moveUp();
            } else if (e.detail < 0 && !this.inMove) {
                this.moveDown();
            }

            return false;
        },
        moveDown() {
            if (this.activeSection === 0) {
                return;
            }
            this.inMove = true;
            this.activeSection--;

            if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

            this.scrollToSection(this.activeSection, true);
        },
        moveUp() {
            if (this.activeSection === 5) {
                return;
            }
            this.inMove = true;
            this.activeSection++;

            if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
            this.scrollToSection(this.activeSection, true);
        },
        scrollToSection(id, force = false) {
            if (this.inMove && !force) return false;

            this.activeSection = id;
            this.inMove = true;

            document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});

            setTimeout(() => {
                this.inMove = false;
            }, 400);

        },
        touchStart(e) {
            e.preventDefault();

            this.touchStartY = e.touches[0].clientY;
        },
        touchMove(e) {
            if (this.inMove) return false;
            e.preventDefault();

            const currentY = e.touches[0].clientY;

            if (this.touchStartY < currentY) {
                this.moveDown();
            } else {
                this.moveUp();
            }

            this.touchStartY = 0;
            return false;
        },
    },
    mounted() {
        this.calculateSectionOffsets();

        window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
        window.addEventListener('mousewheel', this.handleMouseWheel, {passive: false}); // Other browsers

        // window.addEventListener('touchstart', this.touchStart, {passive: false}); // mobile devices
        // window.addEventListener('touchmove', this.touchMove, {passive: false}); // mobile devices
    },
    destroyed() {
        window.removeEventListener('mousewheel', this.handleMouseWheel, {passive: false});  // Other browsers
        window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox

        // window.removeEventListener('touchstart', this.touchStart); // mobile devices
        // window.removeEventListener('touchmove', this.touchMove); // mobile devices
    }
}
</script>

<style scoped>

header {
    padding-top: 20px;
}

.prompt-enter-active, .prompt-leave-active {
    transition: opacity .5s;
}

.prompt-enter, .prompt-leave-to /* .fade-leave-active до версии 2.1.8 */
{
    opacity: 0;
}

.navigation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    position: absolute;
    top: 0;
    margin: 0 auto;
    background: #202020;
    width: 100vw;
    height: 100vh;
}

.navigation-box {
    width: 341px;
    height: 301px;
    margin: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 0 40px #494949;
}

.navigation-item {
    padding: 11px 0;
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
}

.navigation-item:hover {
    background: rgba(134, 132, 132, 0.22);
}

.navigation-item:active {
    color: #58A0A3;
}

#section-1 {
    background: url("../assets/img/phone/section-1.png") no-repeat;
    background-size: 100vw 100%;
}

#section-2 {
    background-image: url("../assets/img/phone/section-2.png");
    background-size: 100vw 100%;
}

#section-3 {
    background-image: url("../assets/img/phone/section-3-4.png");
    background-size: 100vw 100%;
    margin-top: -50px;
}

#section-4 {
    background-image: url("../assets/img/phone/section-4.png");
    background-size: 100vw 100%;
    padding-bottom: 30px;
}

#section-5 {
    background-image: url("../assets/img/phone/section-5.png");
    background-size: 100vw 100%;
    margin-top: -1px;
}

/*------------- section 1 ---------------------*/
.menu {
    margin-top: 20px;
}

.menu:active .menu-item {
    background: #89BF6B;
}

.menu-item:nth-child(1) {
    margin-top: 0;
}

.menu-item {
    width: 20px;
    height: 3px;
    background: #fff;
    margin-top: 3px;
}

.section-1 {
    padding: 75px 0;
    text-align: center;
}

.section-p-header {
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
}

.section-1-list {
    margin-top: 50px;
}

.section-1-list-item {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}

.dash {
    margin: 10px auto;
    width: 15px;
    height: 0px;
    border: 2px solid #325058;
    border-radius: 3px;
}

.computer-1 {
    margin-top: 50px;
}

.section-1-btn {
    padding: 9px 28px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #000000;
    background: #FFFFFF;
    border-radius: 10px;
}

/*------------- ---------------------- ---------------------*/

/*------------- section 2 ---------------------*/
.section-2 {
    margin-top: -1px;
    padding: 30px 0;
}

.logo-2 {
    display: flex;
    justify-content: center;
}

.logo-2-img {
    margin: 15px 0 0 -10px;
}

.navigation-app-1 {
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.145em;
    color: rgba(255, 255, 255, 0.62);
    transform: rotate(-90deg);
    display: flex;
    margin: 180px 0 0 0;
    width: 120px;
}

.vector {
    margin: 15px auto;
}

.text-vector-p:nth-child(1) {
    margin-top: 0;
}

.text-vector-p {
    margin-top: 55px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
}

.text-vector {
    position: relative;
    top: -360px;
    margin-bottom: -340px;
}

.about-p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-top: 50px;
}

.wand {
    border: 1px solid #FFFFFF;
    width: 1px;
    height: 20px;
    margin: -3px 0 -4.5px 8px;
}

.participants-1 {
    display: flex;
    justify-content: center;
}

.participants-p:nth-child(1) {
    margin-top: 5px;
}

.participants-p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 21px 0 0 30px;
}

/*------------- ---------------------- ---------------------*/

/*------------- section 3 ---------------------*/
.section-3 {
    margin-top: -1px;
    padding-top: 30px;
}

.section-3-text {
    display: flex;
    justify-content: normal;
}

.navigation-app-2 {
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.145em;
    color: rgba(255, 255, 255, 0.62);
    transform: rotate(-90deg);
    display: flex;
    margin: 220px 0 0 0;
    width: 160px;
    /*height: 100px;*/
}

.description {
    margin: 0 auto;
}

.description-p:nth-child(1) {
    margin-top: 0;
}

.description-p {
    text-align: center;
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-top: 40px;
}

.description-p-2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-top: -6px;
}

/*------------- ---------------------- ---------------------*/

/*------------- section 4 ---------------------*/
.section-4 {
    margin-top: -3px;
    padding-top: 20px;
}

.section-4-text {
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: end;
    color: #FFFFFF;
    margin-right: 10%;
}

.section-4-p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-bottom: -1px;
}

/*------------- ---------------------- ---------------------*/

/*------------- section 5 ---------------------*/
.section-5 {
    padding-top: 40px;
}

.form-text-p {
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}

.form-text-hr {
    width: 178px;
    border: 2px solid #FFFFFF;
    background: #FFFFFF;
    text-align: center;
}

/*------------- ---------------------- ---------------------*/

/*------------- section 6 ---------------------*/
.section-6 {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
}

.section-6-p-1 {
    margin: 10px 0 0 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 6px;
    line-height: 7px;

    color: #FFFFFF;
}

.section-6-p-2 {
    margin: 10px 20px 0 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 10px;
    text-align: center;

    color: #FFFFFF;
}
</style>