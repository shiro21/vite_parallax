<template>
    <section id="main_header">
        <h1>{{headerTitle.title}}</h1>
        <p>{{headerTitle.subscription}}</p>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        headerTitle: String,
        title: String
    },
    setup() {
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main/header.scss";
    
</style>