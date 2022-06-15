<script setup>
import Info from '@components/Information.vue'
import Header from '@components/Main/Header.vue'
import Nav from '@components/Nav.vue'
import { main } from '@/assets/js/data.js'


</script>

<template>
<!-- jQuery 사용 -->
    <Info />
    <Header :headerTitle="headerTitle" />
    <Nav />

    <section id="parallax_contents">
        <article :id="'article' + (index + 1)" class="content_item" v-for="(item, index) of main" :key="'a' + index">
            <span class="content_item_num">{{item.num}}</span>
            <h2 class="content_item_title">{{item.title}}</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img" :style="'background-image:url('+ item.img +')'"></div>
            </figure>
            <p class="content_item_description split" :aria-label="item.description">
                <span appear @before-enter="beforeEnter" @enter="enter" aria-hidden="true" v-for="(split, i) of item.description" :key="'b' + i">{{split}}</span>
            </p>
        </article>
        <!-- article# // -->
    </section>
</template>

<style lang="scss" scoped>
    #parallax_contents {
        width: 100%;
        max-width: 1600px;
        margin: 0 auto;
        overflow: hidden;
        font-family: 'NEXONLv1Gothic';
        font-weight: 400;
    }
    .content_item {
        position: relative;
        width: 100%;
        max-width: 70vw;
        margin: 10vw 0;
        text-align: right;
        padding-top: 10vw;
        &:nth-child(even) {
            margin-left: auto;
            text-align: left;
            .content_item_num {
                right: auto;
                left: -5vw;
            }
            .content_item_description {
                margin-right: 0;
                margin-left: -3vw;
            }
        }
        .content_item_img { background-position: center center; }
    }
    .content_item_num {
        position: absolute;
        font-size: 25vw;
        font-family: 'Lato';
        opacity: 0.07;
        right: -5vw;
        top: -5vw;
    }
    .content_item_title {
        padding-bottom: 1vw;
        font-size: 2vw;
    }
    .content_item_img_wrap {
        position: relative;
        width: 100%;
        padding-bottom: 56%;
        background-color: #000;
        overflow: hidden;
    }
    .content_item_img {
        position: absolute;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        background-repeat: no-repeat;
        background-size: cover;
        filter: saturate(0%);
        transition: all 1s;
        &:hover {
            filter: saturate(100%);
        }
        &:nth-child(even) {
            right: -10%;
            left: 0;
        }
    }
    .content_item_description {
        position: relative;
        font-size: 4vw;
        line-height: 1.5;
        word-break: keep-all;
        margin-top: -6vw;
        margin-right: -3vw;
        z-index: 1;
    }

    .effect_hide {
        opacity: 0;
        transform: translateX(-100px);
        transform: translateY(500px) rotate(50deg) skew(20deg);
        transition: all 2s cubic-bezier(0, 0.24, 1, 1.47);
        &:nth-child(even) {
            transform: translateX(100px);
            transform: translateY(500px) rotate(-50deg) skew(-20deg);
        }
    }
    .effect_show {
        opacity: 1;
        transform: translateX(0px);
        transform: translateY(0) rotate(0) skew(0);
        transition: all 1s cubic-bezier(0, 0.24, 0, 0.55);
    }

    .content_item_description {
        span {
            display: inline-block;
            min-width: 1.1vw;
            opacity: 0;
        }
        .show {
            opacity: 1;
        }
    }

    #parallax_contents #article1 .show {
        animation: opacity .5s;
    }
    #parallax_contents #article2 .show {
        animation: rotate .5s;
    }
    #parallax_contents #article3 .show {
        animation: rubberBand .5s;
    }
    #parallax_contents #article4 .show {
        animation: flipOutX .5s;
    }
    #parallax_contents #article5 .show {
        animation: rotateOut .5s;
    }
    #parallax_contents #article6 .show {
        animation: zoomInUp .5s;
    }

    @keyframes opacity {
        0%   {opacity: 0; transform: translateY(50px);}
        100% {opacity: 1; transform: translateY(0px);}
    }
    @keyframes rotate {
        0%   {opacity: 0; transform: translateY(150px) rotate(360deg);}
        100% {opacity: 1; transform: translateY(0px) rotate(0);}
    }
    @keyframes rubberBand {
        0%   {transform: scale3d(1, 1, 1);}
        30%  {transform: scale3d(1.25, 0.75, 1);}
        40%  {transform: scale3d(0.75, 1.25, 1);}
        50%  {transform: scale3d(1.15, 0.85, 1);}
        65%  {transform: scale3d(0.95, 1.05, 1);}
        75%  {transform: scale3d(1.05, 0.95, 1);}
        100% {transform: scale3d(1, 1, 1);}
    }
    @keyframes flipOutX {
        0%   {transform: perspective(400px);}
        30%  {transform: perspective(400px) rotate3d(0, 1, 0, -20deg); opacity: 1;}
        100% {transform: perspective(400px) rotate3d(1, 0, 0, 90deg); opacity: 0;}
    }
    @keyframes rotateOut {
        0%   {opacity: 0; transform: rotate3d(0, 0, 1, 200deg);}
        100% {opacity: 1;}
    }
    @keyframes zoomInUp {
        from {
            opacity: 0;
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        60% {
            opacity: 1;
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        }
    }
</style>

<script>
export default {
    data() {
        const headerTitle = {
            title: 'Parallax Effect - Layout 여기부터 제대로',
            subscription: '패럴랙스 스크롤링 효과'
        }

        return {
            headerTitle: headerTitle,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scrollProgress)
    },
    methods: {
        scrollProgress() {
            let scrollTop = (window.pageYOffset || window.scrollY || document.documentElement.scrollTop) + window.innerHeight / 2;

            document.querySelectorAll(".content_item").forEach(el => {
                if(scrollTop >= el.offsetTop) {
                    el.querySelectorAll(".split span").forEach((span, index) => {
                        setTimeout(() => {
                            span.classList.add("show")
                            span.classList.remove("hide");
                        }, 50 * index)
                    })
                } else {
                    el.querySelectorAll(".split span").forEach((span, index) => {
                        setTimeout(() => {
                            span.classList.add("hide")
                            span.classList.remove("show");
                        }, 50 * index)
                    })
                }
            })
        }
    }
}
</script>
