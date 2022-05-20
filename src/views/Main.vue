<script setup>
import Header from '@components/Main/Header.vue'

</script>

<template>
    <Header :headerTitle="headerTitle" />
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
    data() {
        const headerTitle = {
            title: 'Parallax Effect - Layout',
            subscription: '패럴랙스 스크롤링 효과'
        }
        return {
            headerTitle: headerTitle
        }
    }
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
        &:nth-child(1) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg1.jpg);
        }
        &:nth-child(2) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg2.jpg);
        }
        &:nth-child(3) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg3.jpg);
        }
        &:nth-child(4) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg4.jpg);
        }
        &:nth-child(5) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg5.jpg);
        }
        &:nth-child(6) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg6.jpg);
        }
        &:nth-child(7) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg7.jpg);
        }
        &:nth-child(8) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg8.jpg);
        }
        &:nth-child(9) .content_item_img {
            background-image: url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg9.jpg);
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