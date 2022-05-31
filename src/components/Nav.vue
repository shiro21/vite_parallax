<script setup>
import main from '@/assets/js/data.js'

</script>
<template>
    <nav class="parallax_nav">
        <ul :class="{ list_active: listOpen }" v-smooth-scroll>
            <li :class="{ active: isActive === 1 }"><a href="#article1" v-smooth-scroll>s1</a></li>
            <li :class="{ active: isActive === 2 }"><a href="#article2" v-smooth-scroll>s2</a></li>
            <li :class="{ active: isActive === 3 }"><a href="#article3" v-smooth-scroll>s3</a></li>
            <li :class="{ active: isActive === 4 }"><a href="#article4" v-smooth-scroll>s4</a></li>
            <li :class="{ active: isActive === 5 }"><a href="#article5" v-smooth-scroll>s5</a></li>
            <li :class="{ active: isActive === 6 }"><a href="#article6" v-smooth-scroll>s6</a></li>
            <li :class="{ active: isActive === 7 }"><a href="#article7" v-smooth-scroll>s7</a></li>
            <li :class="{ active: isActive === 8 }"><a href="#article8" v-smooth-scroll>s8</a></li>
            <li :class="{ active: isActive === 9 }"><a href="#article9" v-smooth-scroll>s9</a></li>
        </ul>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            // isActive1: true,
            // isActive2: false,
            // isActive3: false,
            // isActive4: false,
            // isActive5: false,
            // isActive6: false,
            // isActive7: false,
            // isActive8: false,
            // isActive9: false,
            isActive: 1,
            listOpen: false
        }
    },
    created() {
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    updated() {
    },
    beforeDestroy () {
       window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        // 여기서부터 다시 해보기
        onScroll () {
            // console.log('스크롤중');
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            let lastScrollTop = 0;
            if (currentScrollPosition <= 0) {
                this.listOpen = false
                return
            } else if(currentScrollPosition > lastScrollTop) {
                this.listOpen = true

                lastScrollTop = currentScrollPosition
            }

            // 자바스크립트를 이용한 방법들

            // document.querySelectorAll(".content_item").forEach((el, i) => {
            //     if(currentScrollPosition >= el.offsetTop - 2) {
            //         document.querySelectorAll(".parallax_nav ul li").forEach(li => {
            //             li.classList.remove("active");
            //         });
            //         document.querySelector(".parallax_nav ul li:nth-child("+ (i + 1) + ")").classList.add("active");
            //     }
            // })

            

            for(let i = 0; i < main.length; i++) {
                if(currentScrollPosition >= parseInt(document.getElementById("article"+ (i + 1)).offsetTop) - 1) {
                    this.isActive = i + 1;
                    // break;
                }
            }
            // if(currentScrollPosition <= parseInt(document.getElementById("article1").offsetTop)) {
            //     this.isActive = 1;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article2").offsetTop)) {
            //     this.isActive = 2;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article3").offsetTop)) {
            //     this.isActive = 3;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article4").offsetTop)) {
            //     this.isActive = 4;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article5").offsetTop)) {
            //     this.isActive = 5;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article6").offsetTop)) {
            //     this.isActive = 6;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article7").offsetTop)) {
            //     this.isActive = 7;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article8").offsetTop)) {
            //     this.isActive = 8;
            // } else if(currentScrollPosition <= parseInt(document.getElementById("article9").offsetTop)) {
            //     this.isActive = 9;
            // }
        }
    }
}
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: #FFF;
    }
    .parallax_nav {
        position: fixed;
        top: 20px;
        right: 20px;
        overflow: hidden;
        z-index: 100;
        > ul {
            position: relative;
            top: -80px;
            transition: all 1s;
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
        .list_active { top: 0px; }
    }
</style>