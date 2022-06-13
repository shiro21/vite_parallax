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
            <figure class="content_item_img_wrap">
                <div class="content_item_img" :style="'background-image:url('+ item.img +')'"></div>
            </figure>
            <!-- 웹표준을 지키기 위해서 aria-label과 aria-hidden을 사용 -->
            <p class="content_item_description split" :aria-label="item.description">
                <span appear @before-enter="beforeEnter" @enter="enter" aria-hidden="true" v-for="(split, i) of item.description" :key="'b' + i">{{split}}</span>
            </p>
        </article>
        <!-- article# // -->
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/effect/effect10.scss';

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
            
            // 기본적인 보여주기
            for(let i = 1; i <= sectionId; i++) {
                if(scrollTop > document.getElementById("article" + i).offsetTop) {
                    // setTimeout(() => {
                    //     document.querySelectorAll("#article"+i+" .split span").forEach(el => {
                    //         el.classList.add("show")
                    //         el.classList.remove("hide")
                    //     })
                    // }, 50 * i);

                    gsap.to("#article"+i+" .split span", {
                        duration: .5,
                        opacity: 1,
                        y: 0,
                        stagger: .05,
                        ease: "power4.out",
                        rotation: 0
                    })
                } else {
                    // setTimeout(() => {
                    //     document.querySelectorAll("#article"+i+" .split span").forEach(el => {
                    //         el.classList.add("hide")
                    //         el.classList.remove("show")
                    //     })
                    // }, 50 * i);
                    gsap.to("#article"+i+" .split span", {
                        duration: .5,
                        opacity: 0,
                        y: 50,
                        stagger: .05,
                        ease: "power4.out",
                        rotation: 234
                    })
                }
            }
        },
        // beforeEnter(el) {
        //     console.log(el)
        //     el.style.opacity = 0
        //     el.style.transform = 'translateY(60px)'
        // },
        // enter(el) {
        //     console.log(el)
        //     gsap.to(el, {
        //         opacity: 1,
        //         y: 0,
        //         stagger: .5,
        //         duration: 2,
        //     })
        // }
    }
}
</script>
