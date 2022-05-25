<script setup>

import { main } from '@/assets/js/data.js'

</script>

<template>
<!-- 
    한페이지로 만들었을 경우
    최대한 길게 풀어썼을 경우
 -->
    <div class="parallax_scroll">scrollTop() : <span>0</span>px</div>
    <div class="parallax_information">
        <ul>
            <li>#section1 offset() : <span class="offset1">0</span></li>
            <li>#section2 offset() : <span class="offset2">0</span></li>
            <li>#section3 offset() : <span class="offset3">0</span></li>
            <li>#section4 offset() : <span class="offset4">0</span></li>
            <li>#section5 offset() : <span class="offset5">0</span></li>
            <li>#section6 offset() : <span class="offset6">0</span></li>
            <li>#section7 offset() : <span class="offset7">0</span></li>
            <li>#section8 offset() : <span class="offset8">0</span></li>
            <li>#section9 offset() : <span class="offset9">0</span></li>
        </ul>
    </div>
    <section id="main_header">
        <h1>Parallax Effect - Layout</h1>
        <p>패럴랙스 스크롤링 효과</p>
    </section>
    <nav class="parallax_nav">
        <ul>
            <li :class="{ active: isActive1 }"><a id="move1" href="#article1" v-smooth-scroll>s1</a></li>
            <li :class="{ active: isActive2 }"><a id="move2" href="#article2" v-smooth-scroll>s2</a></li>
            <li :class="{ active: isActive3 }"><a id="move3" href="#article3" v-smooth-scroll>s3</a></li>
            <li :class="{ active: isActive4 }"><a id="move4" href="#article4" v-smooth-scroll>s4</a></li>
            <li :class="{ active: isActive5 }"><a id="move5" href="#article5" v-smooth-scroll>s5</a></li>
            <li :class="{ active: isActive6 }"><a id="move6" href="#article6" v-smooth-scroll>s6</a></li>
            <li :class="{ active: isActive7 }"><a id="move7" href="#article7" v-smooth-scroll>s7</a></li>
            <li :class="{ active: isActive8 }"><a id="move8" href="#article8" v-smooth-scroll>s8</a></li>
            <li :class="{ active: isActive9 }"><a id="move9" href="#article9" v-smooth-scroll>s9</a></li>
        </ul>
    </nav>
    <section id="parallax_contents">
        <article id="article1" class="content_item">
            <span class="content_item_num">01</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article1 -->

        <article id="article2" class="content_item">
            <span class="content_item_num">02</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article2 -->

        <article id="article3" class="content_item">
            <span class="content_item_num">03</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article3 -->

        <article id="article4" class="content_item">
            <span class="content_item_num">04</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article4 -->

        <article id="article5" class="content_item">
            <span class="content_item_num">05</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article5 -->

        <article id="article6" class="content_item">
            <span class="content_item_num">06</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article6 -->

        <article id="article7" class="content_item">
            <span class="content_item_num">07</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article7 -->

        <article id="article8" class="content_item">
            <span class="content_item_num">08</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article8 -->

        <article id="article9" class="content_item">
            <span class="content_item_num">09</span>
            <h2 class="content_item_title">Section1</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">높은 목표를 세우고, 스스로 채찍질 한다.</p>
        </article>
        <!-- // article9 -->

    </section>
</template>

<script>

export default {
    created() {
        let scrolling = window.addEventListener("scroll", function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
        
            document.querySelector(".parallax_scroll span").innerText = parseInt(scrollTop);
        
            document.querySelector(".offset1").innerText = parseInt(document.getElementById("article1").offsetTop) + 'px';
            document.querySelector(".offset2").innerText = parseInt(document.getElementById("article2").offsetTop) + 'px';
            document.querySelector(".offset3").innerText = parseInt(document.getElementById("article3").offsetTop) + 'px';
            document.querySelector(".offset4").innerText = parseInt(document.getElementById("article4").offsetTop) + 'px';
            document.querySelector(".offset5").innerText = parseInt(document.getElementById("article5").offsetTop) + 'px';
            document.querySelector(".offset6").innerText = parseInt(document.getElementById("article6").offsetTop) + 'px';
            document.querySelector(".offset7").innerText = parseInt(document.getElementById("article7").offsetTop) + 'px';
            document.querySelector(".offset8").innerText = parseInt(document.getElementById("article8").offsetTop) + 'px';
            document.querySelector(".offset9").innerText = parseInt(document.getElementById("article9").offsetTop) + 'px';
            
        })
        return {
            scrolling
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy () {
       window.removeEventListener('scroll', this.onScroll)
    },
    data() {
        const headerTitle = {
            title: 'Parallax Effect - Javascript',
            subscription: '패럴랙스 스크롤링 효과 - 메뉴 이동'
        }
        return {
            headerTitle: headerTitle,
            isActive1: true,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            isActive7: false,
            isActive8: false,
            isActive9: false
        }
    },
    methods: {
        onScroll () {
            // console.log('스크롤중');
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return
            }
            // console.log(currentScrollPosition);
            if(currentScrollPosition <= parseInt(document.getElementById("article1").offsetTop)) {
                    this.isActive1 = true;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                    this.isActive6 = false;
                    this.isActive7 = false;
                    this.isActive8 = false;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article2").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = true;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                    this.isActive6 = false;
                    this.isActive7 = false;
                    this.isActive8 = false;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article3").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = false;
                    this.isActive3 = true;
                    this.isActive4 = false;
                    this.isActive5 = false;
                    this.isActive6 = false;
                    this.isActive7 = false;
                    this.isActive8 = false;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article4").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = true;
                    this.isActive5 = false;
                    this.isActive6 = false;
                    this.isActive7 = false;
                    this.isActive8 = false;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article5").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = true;
                    this.isActive6 = false;
                    this.isActive7 = false;
                    this.isActive8 = false;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article6").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                    this.isActive6 = true;
                    this.isActive7 = false;
                    this.isActive8 = false;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article7").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                    this.isActive6 = false;
                    this.isActive7 = true;
                    this.isActive8 = false;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article8").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                    this.isActive6 = false;
                    this.isActive7 = false;
                    this.isActive8 = true;
                    this.isActive9 = false;
            } else if(currentScrollPosition <= parseInt(document.getElementById("article9").offsetTop)) {
                    this.isActive1 = false;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                    this.isActive6 = false;
                    this.isActive7 = false;
                    this.isActive8 = false;
                    this.isActive9 = true;
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition
        }
    }    
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main/header.scss";
    a {
        text-decoration: none;
        color: #FFF;
    }
    .parallax_nav {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 100;
        > ul {
            display: flex;
            padding: 20px;
            border-radius: 100px;
            background-color: #D2D2D2;
            > li {
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-radius: 50%;
                margin-right: 10px;
                font-size: 16px;
                font-weight: 700;
            }
            .active { background-color: #FFF; a { color: #222; } }
        }
    }
    // Nav

    .parallax_scroll, .parallax_information {
        position: fixed;
        left: 20px;
        padding: 20px;
        z-index: 100;
    }
    .parallax_scroll {
        bottom: 20px;
    }
    .parallax_information {
        bottom: 80px;
        line-height: 1.5;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.3);
    }
    // Info

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
        &:nth-child(1) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg11.jpg);
        }
        &:nth-child(2) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg12.jpg);
        }
        &:nth-child(3) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg13.jpg);
        }
        &:nth-child(4) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg14.jpg);
        }
        &:nth-child(5) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg15.jpg);
        }
        &:nth-child(6) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg16.jpg);
        }
        &:nth-child(7) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg17.jpg);
        }
        &:nth-child(8) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg18.jpg);
        }
        &:nth-child(9) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg19.jpg);
        }
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
    }
    .content_item_img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        filter: saturate(0%);
        transition: all 1s;
        &:hover {
            filter: saturate(100%);
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
</style>