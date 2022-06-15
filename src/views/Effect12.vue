<script setup>
import Info from '@components/Information.vue'
import Header from '@components/Main/Header.vue'
import Nav from '@components/Nav.vue'
import { main } from '@/assets/js/data.js'


</script>

<template>
<!-- 
    1. gsap 텍스트 변경
    2. gsap ease : https://greensock.com/ease-visualizer
 -->
    <Info />
    <Header :headerTitle="headerTitle" />
    <Nav />

    <section id="parallax_contents">
        <article :id="'article' + (index + 1)" class="content_item" v-for="(item, index) of main" :key="'a' + index">
            <span class="content_item_num">{{item.num}}</span>
            <h2 class="content_item_title">{{item.title}}</h2>
            <figure class="content_item_img_wrap reveal" :class="item.reveal">
                <div class="content_item_img" :style="'background-image:url('+ item.img +')'"></div>
            </figure>
            <!-- 웹표준을 지키기 위해서 aria-label과 aria-hidden을 사용 -->
            <p class="content_item_description reveal" :class="item.reveal" data-delay="500" :aria-label="item.description">
                <span aria-hidden="true" v-for="(split, i) of item.description" :key="'b' + i">{{split}}</span>
            </p>
        </article>
        <!-- article# // -->
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/effect/effect12.scss';

</style>

<script>
import gsap from 'gsap'

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
            let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight / 2;
            let sectionId = document.querySelectorAll(".content_item").length;

            const reveal = document.querySelectorAll(".reveal");

            reveal.forEach(el => {
                const delay = el.dataset.delay

                // parentElement = 부모 [ .reveal 클래스의 부모인 content_item 클래스 ]
                if(scrollTop > el.parentElement.offsetTop) {
                    if(delay === undefined) {
                        el.classList.add("show");
                        el.classList.remove("hide");
                    } else {
                        setTimeout(() => {
                            el.classList.add("show");
                            el.classList.remove("hide");
                        }, delay)
                    }
                } else {
                    if(delay === undefined) {
                        el.classList.add("hide");
                        el.classList.remove("show");
                    } else {
                        setTimeout(() => {
                            el.classList.add("hide");
                            el.classList.remove("show");
                        }, delay)
                    }
                }
            })
        },
    }
}
</script>
