<template>
    <Head/>

    <div class="content">
            <h1 class="title">Sobre</h1>
            <div class="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum hic nostrum laboriosam unde aliquid? Mollitia quod, alias tempore, necessitatibus repellendus optio non, ipsum maxime rem et laborum accusamus! Corporis, eligendi!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum hic nostrum laboriosam unde aliquid? Mollitia quod, alias tempore, necessitatibus repellendus optio non, ipsum maxime rem et laborum accusamus! Corporis, eligendi!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum hic nostrum laboriosam unde aliquid? Mollitia quod, alias tempore, necessitatibus repellendus optio non, ipsum maxime rem et laborum accusamus! Corporis, eligendi!</p>
            </div>    
        </div> 
</template>

<script>
import Head from './Head.vue';
    export default{
        components:{
            Head
        }
    }
</script>

<style scoped>
    .title{
        margin: 4rem 0 2rem 0;
    }
    .text{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>