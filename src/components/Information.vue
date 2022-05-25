<template>
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
            
            if(scrollTop <= parseInt(document.getElementById("article1").offsetTop)) {
                console.log('1번');
                this.isActive1 = true,
                this.isActive2 = false,
                this.isActive3 = false,
                this.isActive4 = false,
                this.isActive5 = false,
                this.isActive6 = false,
                this.isActive7 = false,
                this.isActive8 = false,
                this.isActive9 = false
            } else if(scrollTop <= parseInt(document.getElementById("article2").offsetTop)) {
                this.isActive1 = false,
                this.isActive2 = true,
                this.isActive3 = false,
                this.isActive4 = false,
                this.isActive5 = false,
                this.isActive6 = false,
                this.isActive7 = false,
                this.isActive8 = false,
                this.isActive9 = false
            } else if(scrollTop <= parseInt(document.getElementById("article3").offsetTop)) {

            } else if(scrollTop <= parseInt(document.getElementById("article4").offsetTop)) {

            } else if(scrollTop <= parseInt(document.getElementById("article5").offsetTop)) {

            } else if(scrollTop <= parseInt(document.getElementById("article6").offsetTop)) {

            } else if(scrollTop <= parseInt(document.getElementById("article7").offsetTop)) {

            } else if(scrollTop <= parseInt(document.getElementById("article8").offsetTop)) {

            } else if(scrollTop <= parseInt(document.getElementById("article9").offsetTop)) {

            }
        })
        return {
            scrolling
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
        console.log(document.getElementById("article1").offsetTop);
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
    },
}


</script>

<style lang="scss" scoped>
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
</style>