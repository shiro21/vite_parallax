<script setup>
import Info from '@components/Information.vue'
import Header from '@components/Main/Header.vue'
import Nav from '@components/Nav.vue'
import { main } from '@/assets/js/data.js'

</script>

<template>
<!-- 
    닷 메뉴로 표현
    list v-for를 사용해 단순화
 -->
    <Info />
    <Header :headerTitle="headerTitle" />
    <Nav />
    <section id="parallax_contents">
        <article :id="'article' + (index + 1)" class="content_item" v-for="(item, index) of main" :key="'a' + index">
            <span class="content_item_num">{{item.num}}</span>
            <h2 class="content_item_title">{{item.title}}</h2>
            <figure class="content_item_img_wrap">
                <div class="content_item_img"></div>
            </figure>
            <p class="content_item_description">{{item.description}}</p>
        </article>
        <!-- // article1 -->
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