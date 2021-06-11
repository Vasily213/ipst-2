<template>
    <div>
        <div class="main-navigation">
            <div class="sections-menu">
                <a href="/#page1" class="menu-point"><span><img class="img-logo-navigate" alt=""
                                                                src="../assets/img/logo_navigation.png"></span></a>
                <a href="/#page2" class="menu-point"><span>about us</span></a>
                <a href="/#page4" class="menu-point"><span>mission</span></a>
                <a href="/#page5" class="menu-point"><span>team</span></a>
                <a href="/#page6" class="menu-point"><span >contact us</span></a>
            </div>
            <div class="hr-hide"></div>
        </div>
        <full-page :options="options" id="fullpage" ref="fullpage">
            <div id="app-home" class="app-home">
                <div class="hr-section-1-2">
                    <div class="hr"></div>
                </div>
                <div class="hr-section-5">
                    <div class="hr-3"></div>
                </div>
                <div class="hr-full">
                    <div class="hr-2"></div>
                </div>
                <div class="container">
                    <div class="section" data-anchor="page1">
                        <section id="section-1">
                            <header class="header">
                                <img alt="" src="../assets/img/logo_header.png">
                            </header>
                            <div>
                                <div class="row">
                                    <div class="col-xl-2 col-lg-1"></div>
                                    <div class="col-xl col-lg-1">
                                        <div>
                                            <div class="section-1">
                                                <div>
                                                    <p class="col-p-1">WE ARE <br> THE CREATORS of</p>
                                                    <a href="#page6">
                                                        <button
                                                            class="select-1-btn"
                                                        >
                                                            <b>CONTACT US</b>
                                                        </button>
                                                    </a>
                                                    <div class="">
                                                        <div class="row select-row-2">
                                                            <div class="col" style="display: flex;">
                                                                <div class="listing">
                                                                    <div class="list"></div>
                                                                    <div class="circle">
                                                                        <svg class="circle-item" width="25" height="25"
                                                                             viewBox="0 0 25 25"
                                                                             fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="12.5" cy="12.5" r="12.5"
                                                                                    fill="#58A0A3"/>
                                                                        </svg>
                                                                        <br>
                                                                        <svg class="circle-item" width="25" height="25"
                                                                             viewBox="0 0 25 25"
                                                                             fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="12.5" cy="12.5" r="12.5"
                                                                                    fill="#58A0A3"/>
                                                                        </svg>
                                                                        <br>
                                                                        <svg class="circle-item" width="25" height="25"
                                                                             viewBox="0 0 25 25"
                                                                             fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="12.5" cy="12.5" r="12.5"
                                                                                    fill="#58A0A3"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div class="" style="margin-left: 30px">
                                                                    <p class="col-p-2">IT solutions</p>
                                                                    <p class="col-p-2">your unique technology</p>
                                                                    <p class="col-p-2">positive changes in your business
                                                                        <br> and your
                                                                        life
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div class="col computer">
                                                                <computer></computer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="section" data-anchor="page2">
                        <section id="section-2">
                            <div class="section-2">
                                <div class="row">
                                    <div class="col-xl-2 col-lg-1"></div>
                                    <div class="col-xl col-lg-1">
                                        <div class="section-2">
                                            <div>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <img src="../assets/img/logo-section-2.png" alt="">
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="div-text-item">
                                                    <span class="div-text">
                                                             <b style="font-family: Furore,sans-serif">IPST</b> – is a Melbourne-based company, specializing
                                                        in development and implementation of IT-solutions.
                                                        </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row section-2-row-2">
                                                    <div class="col-1"></div>
                                                    <div class="col-5">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="div-text-item">
                                                    <span class="div-text">
                                                            We implement machine learning in our projects
                                                            and provide projects that capable of cross-platforming.
                                                        </span>
                                                                    <!--                                                    <div class="div-text">-->
                                                                    <!--                                                    </div>-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-1"></div>
                                                    <div class="col" style="margin-left: 100px">
                                                        <computer_2 class="computer-2"></computer_2>
                                                    </div>
                                                </div>
                                                <div class="row section-2-row-3">
                                                    <div class="col-4">
                                                        <computer3 class="computer-3"></computer3>
                                                    </div>
                                                    <div class="col-6"
                                                         style="display: flex;flex-direction: column;justify-content: flex-end;">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="div-text-item">
                                                    <span class="div-text-3">
                                                            We create Web and Mobile app solutions with
                                                            broad functionality and complex integrations.
                                                            Using the latest technologies, we develop
                                                            products that will help you find  innovative,
                                                            transforming solutions for your business
                                                        </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="section">
                        <section id="section-3">
                            <div class="participants">
                                <img src="../assets/img/participants.png" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="section" data-anchor="page4">
                        <section id="section-4">
                            <div>
                                <div style="display: flex;justify-content: center;">
                                    <div class=""></div>
                                    <div class="">
                                        <div class="section-4">
                                            <p class="section-4-p-1">OUR MISSION</p>
                                            <div style="display: flex">
                                                <div class="col-xl-4">
                                                    <div class="section-4-item">
                                                        <p class="section-4-p-2">We create with passion</p>
                                                    </div>
                                                    <p class="section-4-p-3">
                                                        We make not only working but <br>
                                                        valuable products. You will <br>
                                                        receive a solution that will cover <br>
                                                        all your real needs with the style <br>
                                                        and innovation.
                                                    </p>
                                                </div>
                                                <div class="col-xl-3" style="display: flex;justify-content: center;">
                                                    <img class="image-2" src="../assets/img/image-1.png" alt="">
                                                </div>
                                                <div class="col-xl">
                                                    <div class="section-4-item-2">
                                                        <p class="section-4-p-2">We are continuously learning</p>
                                                    </div>
                                                    <p class="section-4-p-3">
                                                        Every day our developers research new <br>
                                                        technologies according to their role in <br>
                                                        order to make your product more and <br>
                                                        more modern, fulfilling and profitable.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mission-2-1">
                                                <div class="mission-2-1-div">
                                                    <div class="section-4-item">
                                                        <p class="section-4-p-2">Time keeps pace with us</p>
                                                    </div>
                                                    <p class="section-4-p-3">
                                                        We were born in the digital world. <br>
                                                        Our generation enjoys working in <br>
                                                        collaborative environments and <br>
                                                        being creative. We explore, learn <br>
                                                        and use the most of modern <br>
                                                        functional tools, so why we are <br>
                                                        always up to date with news in the <br>
                                                        global IT-industry.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=""></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="section" data-anchor="page5">
                        <section id="section-5">
                            <div>
                                <div class="row">
                                    <div class="col-xl-2 col-lg-1"></div>
                                    <div class="col-xl col-lg-1">
                                        <div>
                                            <p class="section-5-p-1">OUR TEAM</p>
                                            <slider class="slider"></slider>

                                            <p class="section-5-p-2">We dream to be proud of the positive changes that
                                                we
                                                will
                                                <br>
                                                implement to your business.</p>
                                        </div>
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="section" data-anchor="page6" @click="clickWindow">
                        <div v-show="success.bool">
                            <transition name="modal">
                                <div class="modal-mask">
                                    <div class="modal-wrapper">
                                        <div class="modal-container">
                                            <img class="img" src="../assets/img/success-send.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <section id="section-6">
                            <div>
                                <div class="row">
                                    <div class="col-xl-2 col-lg-1"></div>
                                    <div class="col-xl col-lg-1">
                                        <div>
                                            <p class="section-6-p-1">TELL US ABOUT YOUR PROJECT</p>
                                            <div class="row">
                                                <div class="col">
                                                    <contact-form @screen="screen"></contact-form>
                                                </div>
                                                <div class="col">
                                                    <computer4 class="computer-4"></computer4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <footer class="footer">
                        <div class="row">
                            <div class="col-xl-2 col-lg-1"></div>
                            <div class="col-xl col-lg-1">
                                <div class="row">
                                    <div class="col">
                                        <p class="footer-p-1">
                                            Unit 2/ 29 Rosewarne Avenue, Cheltenham,<br>
                                            Victoria, Australia 3192
                                        </p>
                                    </div>
                                    <div class="col-2">
                                        <img src="../assets/img/logo-1.png" alt="">
                                    </div>
                                    <div class="col">
                                        <p class="footer-p-2">WORK WITH US</p>
                                        <p class="footer-p-3">copyright IPST© 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </footer>
                </div>
            </div>
        </full-page>
    </div>
</template>

<script>
import Vue from 'vue';
import computer from "../components/computer";
import computer_2 from "../components/computer-2";
import Computer3 from "../components/computer-3";
import ContactForm from "../components/contactForm";
import Computer4 from "../components/computer-4";
import Slider from "../components/slider";
import Carousel from 'vue-carousel-3d';
import '../assets/js/full'
import FullPage from "../components/FullPage";

Vue.use(Carousel);

export default {
    name: "app",
    components: {
        FullPage,
        ContactForm,
        Slider,
        Computer4,
        Computer3,
        computer,
        computer_2,
    },
    data: function () {
        return {
            options: {
                // afterLoad: this.afterLoad,
                // navigation: true,
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
            },
            success: {
                bool: false,
                step: 1
            },
        }
    },
    methods: {
        clickWindow(e) {
             if (this.success.bool) {
                 this.success.bool = false;
             }
            if (e.target.innerText === 'SUBMIT'){
                this.success.bool = e.bool
            }
        },
        screen(obj) {
            this.success.bool = obj.bool;
        },
        addSection: function (e) {
            var newSectionNumber = document.querySelectorAll('.fp-section').length + 1

            // creating the section div
            var section = document.createElement('div')
            section.className = 'section'
            section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`

            // adding section
            document.querySelector('#fullpage').appendChild(section)

            // creating the section menu element
            var sectionMenuItem = document.createElement('li')
            sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
            sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`

            // adding anchor for the section
            this.options.anchors.push(`page${newSectionNumber}`)

            // we have to call `update` manually as DOM changes won't fire updates
            // requires the use of the attribute ref="fullpage" on the
            // component element, in this case, <full-page>
            // ideally, use an ID element for that element too
            this.$refs.fullpage.build()
        },

        removeSection: function () {
            var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
            var lastSection = sections[sections.length - 1]

            // removing the last section
            lastSection.parentNode.removeChild(lastSection)

            // removing the last anchor
            this.options.anchors.pop()

            // removing the last item on the sections menu
            var sectionsMenuItems = document.querySelectorAll('#menu li')
            var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
            lastItem.parentNode.removeChild(lastItem)
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
        // calculateSectionOffsets() {
        //     let sections = document.getElementsByTagName('section');
        //     let length = sections.length;
        //
        //     for (let i = 0; i < length; i++) {
        //         let sectionOffset = sections[i].offsetTop;
        //         this.offsets.push(sectionOffset);
        //     }
        // },
        // handleMouseWheel: function (e) {
        //     if (e.wheelDelta < 30 && !this.inMove) {
        //         this.moveUp();
        //     } else if (e.wheelDelta > 30 && !this.inMove) {
        //         this.moveDown();
        //     }
        //
        //     e.preventDefault();
        //     return false;
        // },
        // handleMouseWheelDOM: function (e) {
        //
        //     if (e.detail > 0 && !this.inMove) {
        //         this.moveUp();
        //     } else if (e.detail < 0 && !this.inMove) {
        //         this.moveDown();
        //     }
        //
        //     return false;
        // },
        // moveDown() {
        //     if (this.activeSection === 0) {
        //         return;
        //     }
        //     this.inMove = true;
        //     this.activeSection--;
        //
        //     if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        //
        //     this.scrollToSection(this.activeSection, true);
        // },
        // moveUp() {
        //     if (this.activeSection === 5) {
        //         return;
        //     }
        //     this.inMove = true;
        //     this.activeSection++;
        //
        //     if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        //     this.scrollToSection(this.activeSection, true);
        // },
        // touchStart(e) {
        //     e.preventDefault();
        //
        //     this.touchStartY = e.touches[0].clientY;
        // },
        // touchMove(e) {
        //     if (this.inMove) return false;
        //     e.preventDefault();
        //
        //     const currentY = e.touches[0].clientY;
        //
        //     if (this.touchStartY < currentY) {
        //         this.moveDown();
        //     } else {
        //         this.moveUp();
        //     }
        //
        //     this.touchStartY = 0;
        //     return false;
        // },
    }
}
</script>

<style>
@import "../assets/css/section-1.css";
@import "../assets/css/section-2.css";
@import "../assets/css/section-3.css";
@import "../assets/css/section-4.css";
@import "../assets/css/section-5.css";
@import "../assets/css/section-6.css";

.modal-mask {
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(32, 32, 32, 0.8);
    transition: 0.3s;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    display: flex;
    justify-content: center;
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.prompt-enter-active, .prompt-leave-active {
    transition: opacity .5s;
}

.prompt-enter, .prompt-leave-to {
    opacity: 0;
}

.hr-full {
    position: absolute;
    top: 150px;
    right: 130px;
    z-index: 1;
}

.hr-hide {
    width: 3px;
}

a {
    color: snow !important;
}

#section-2 {
    padding-top: 5vh;
}

.slider-control:hover {
    zoom: 1.1;
}

.main-navigation {
    position: absolute;
    right: 8.3rem;
    top: 15rem;
    z-index: 1;
}

.hr-section-1-2 {
    z-index: 1;
    position: absolute;
    top: 175px;
    left: 120px;
}

.hr-section-5 {
    z-index: 1;
    position: absolute;
    left: 120px;
    top: 425vh;
}

.sections-menu {
    position: fixed;
}

.sections-menu > a {
    text-decoration: none;
}

.menu-point {
    font-family: Furore;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;

    opacity: 0.55;
    transform: rotate(90deg);
    display: block;
    margin: 1rem 0 120px 0;
    transition: .4s ease all;
    cursor: pointer;
}

.menu-point:nth-child(1) {
    margin-left: -10px;
    opacity: 1;
}

.img-logo-navigate {
    transition: 1s;
    opacity: .55;
}

.img-logo-navigate:hover {
    transition: 1s;
    transform: rotate(180deg);
    opacity: 1;
    cursor: pointer;
}

/*.img-logo-navigate:hover  .menu-point:nth-child(1) {*/
/*    opacity: 1;*/
/*}*/

.menu-point:nth-child(1):hover {
    margin-left: -10px;
}

.menu-point:nth-child(2) {
    margin-top: -80px;
}

.menu-point:nth-child(4) {
    margin-top: -25px;
}

.menu-point:nth-child(5) {
    margin-top: -50px;
}

.menu-point:hover {
    color: #A0F9FF;
    opacity: 1;
}

.menu-point.active {
    opacity: 1;
    color: #fff;
    transform: rotate(90deg);
}
</style>
