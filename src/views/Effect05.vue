<script setup>
import Info from '@components/Information.vue'
import Header from '@components/Test/Header.vue'
import Nav from '@components/Nav.vue'

</script>

<template>
<!-- 
    패럴랙스 이펙트 만들기
    사용한 기술
    1. vue3-smooth-scroll ( 부드럽게 내려가는 효과 )
    2. javascript window, document, onScroll, parseInt
 -->
    <Header />
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
}
</script>

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
        &:nth-child(1) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653559260394-ee10e61e0155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80);
        }
        &:nth-child(2) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653559260394-ee10e61e0155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60);
        }
        &:nth-child(3) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653917199974-0bd994526ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60);
        }
        &:nth-child(4) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653856289655-fba958e7bdcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60);
        }
        &:nth-child(5) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653559260146-c5bb477ce9d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60);
        }
        &:nth-child(6) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653861281679-06846bf69b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60);
        }
        &:nth-child(7) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653904780118-96d8b4b1eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60);
        }
        &:nth-child(8) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1653637832845-8e258a71b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60);
        }
        &:nth-child(9) .content_item_img {
            background-image: url(https://images.unsplash.com/photo-1474073705359-5da2a8270c64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60);
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