<template>
  <div class="container-app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';


  export default{
    components:{
      Header
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