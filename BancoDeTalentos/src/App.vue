<template>
  <div class="container-app">
    <Home/>
  </div>
</template>

<script>
  import Head from "./components/Head.vue";
  import About from "./components/About.vue";
  import Home from "./components/Home.vue"

  export default{
    components:{
      About, Head, Home
    }
  }
</script>

<style scoped>
.container-app{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 30vw;
        margin-left: 30vw;
        color: #000000c0;
    }
</style>