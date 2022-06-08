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
            <p class="content_item_description">{{item.description}}</p>
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
            transform: translateY(32px) skew(30deg);
            transition: all .33s ease-in-out;
        }
        .show {
            opacity: 1;
            transform: translateY(0) skew(0);
        }
        .hide {
            display: inline-block;
            min-width: 1.1vw;
            opacity: 0;
            transform: translateY(32px) skew(30deg);
            transition: all .33s ease-in-out;
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
        // // jQuery 글씨 아웃라인처리 (단일)
        // let text = $("#article1 .content_item_description").text()
        // // 접근성 문제로 인해 aria-hidden사용
        // let split = text.split('').join("</span><span aria-hidden='true'>")
        // split = `<span aria-hidden='true'>${split}</span>`
        // // 접근성 문제로 인해 aria-label을 사용해줌
        // $("#article1 .content_item_description").html(split).attr("aria-label", text)

        // $(window).scroll(function() {
        //     if($(window).scrollTop() >= $("#article1").offset().top) {
        //         $("#article1 .content_item_description").addClass("show")
        //     }
        // })

        // 글씨 아웃라인 처리 (여러개)
        $(".content_item_description").each(function() {
            let text = $(this).text();
            let split = text.split('').join("</span><span aria-hidden='true' class='hide'>");
            split = `<span aria-hidden='true' class='hide'>${split}</span>`
            $(this).html(split).attr("aria-label", text);
        })

        $(window).scroll(function() {
            // $(".content_item_description").each(function() {
            //     if($(window).scrollTop() >= $(this).offset().top - $(window).height() / 2) {
            //         $(this).addClass("show")
            //     }
            // })


        })
    },
    methods: {
        scrollProgress() {
            for(let i = 1; i <= $(".content_item").length; i++) {
                if($(window).scrollTop() >= $("#article" + i).offset().top - $(window).height() / 2) {
                    $("#article"+ i +" .content_item_description span").each((index) => {
                        setTimeout(() => {
                            $("#article"+ i +" .content_item_description span").eq(index).addClass("show")
                            $("#article"+ i +" .content_item_description span").eq(index).removeClass("hide")
                        }, 50 * index)
                    })
                } else {
                    $("#article"+ i +" .content_item_description span").each((index) => {
                        setTimeout(() => {
                            $("#article"+ i +" .content_item_description span").eq(index).addClass("hide")
                            $("#article"+ i +" .content_item_description span").eq(index).removeClass("show")
                        }, 50 * index)
                    })    
                }
            }
        }
    }
}
</script>
