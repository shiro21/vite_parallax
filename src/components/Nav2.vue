<script setup>
import main from '@/assets/js/data.js'

</script>
<template>
    <nav class="parallax_nav" :class="{ fix_off : del }">
        <ul>
            <li class="point" @click="delOpen">X</li>
            <li v-for="(item, index) of main" :key="'a' + index" :class="{ active: isActive === (index + 1) }"><a :href="item.href" v-smooth-scroll></a></li>
        </ul>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            del: false,
            isActive: 1
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
        onScroll () {
            // console.log('스크롤중');
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 0) {
                return
            }

            for(let i = 0; i < main.length; i++) {
                if(currentScrollPosition <= parseInt(document.getElementById("article"+ (i + 1)).offsetTop)) {
                    this.isActive = i + 1;
                    break;
                }
            }
        },
        delOpen() {
            this.del = !this.del
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
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        transition: all 1s ease;
        z-index: 100;
        > ul {
            display: flex;
            flex-direction: column;
            padding: 20px;
            border-radius: 100px;
            background-color: #D2D2D2;
            > li {
                width: 20px;
                height: 20px;
                line-height: 22px;
                border-radius: 50%;
                font-size: 16px;
                font-weight: 700;
                background: transparent;
                text-align: center;
                margin-bottom: 10px;
                border: 1px solid #FFF;
                &:last-child { margin-bottom: 0; }
            }
            .active { background-color: #FFF; a { color: #222; } }
        }
    }
    .fix_off {
        right: -100px;
    }
    .point {
        cursor: pointer;
    }
</style>