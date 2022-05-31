<script setup>
import main from '@/assets/js/data.js'

</script>
<template>
    <nav class="parallax_nav">
        <ul>
            <li v-for="(item, index) of main" :key="'a' + index" ><a :href="item.href" v-smooth-scroll>{{item.num}}</a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: #FFF;
    }
    .parallax_nav {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        overflow: hidden;
        transition: all 1s;
        z-index: 100;
        > ul {
            position: relative;
            top: 0px;
            transition: all 1s;
            display: flex;
            padding: 20px;
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
        .list_active { top: 0px; }
    }
    .hide {
        top: -100px;
    }
</style>

<script>
    export default {
        mounted() {
            window.addEventListener("scroll", this.onScroll);
            window.addEventListener("scroll", scrollProgress);
        },
        methods: {
            onScroll() {
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            }
        }
    }


    let nowScrollTop;
    let lastScrollTop = 0;

    function scrollProgress(){
        nowScrollTop = true;

        setTimeout(() => {
            if(nowScrollTop) {
                nowScrollTop = false;
                hasScroll();
            }
        }, 100);
    }

    function hasScroll() {
        let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

        if(scrollTop > lastScrollTop){
            document.querySelector(".parallax_nav").classList.add("hide");
        } else {
            document.querySelector(".parallax_nav").classList.remove("hide");
        }

        lastScrollTop = scrollTop;

    };

    
</script>