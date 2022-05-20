<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@components/HelloWorld.vue'
import Header from '@components/Main/Header.vue'
</script>

<template>
  <!-- <input type="text" v-model="callProps" />
  <Header :msg="callProps" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view />
</template>

<style>
@font-face {
    font-family: 'NEXONLv1Gothic';
    font-weight: 300;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff') format('woff');
    font-style: normal;
}
@font-face {
    font-family: 'NEXONLv1Gothic';
    font-weight: 400;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-style: normal;
}
body {
  background-color: #222;
  color: #FFF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import { ref } from 'vue'

export default {
  data() {
    const callProps = ref('Hello')

    return {
      callProps
    }
  }
}
</script>
