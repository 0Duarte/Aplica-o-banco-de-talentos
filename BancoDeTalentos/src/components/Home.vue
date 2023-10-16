<template>
    <div class="container-home">
        <h1 class="title">Banco de talentos</h1>
        <div class="container">
            <Card
            v-for="talent in talentList"
            :key="talent.id"
            :name="talent.name"
            :email="talent.email"
            :birthday="talent.birthday"
            :whatsapp="talent.whatsapp"
            :area="talent.area"
            :level="talent.level"
            :skills="talent.skills"
            :apresentation="talent.apresentation"/>
        </div>
        

    </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card.vue'
export default {
    data(){
        return{
            talentList:[],
        }
    },
    mounted(){
      axios.get('http://localhost:3000/talents')
      .then(res => this.talentList = res.data)
      .catch(erro => console.log(erro))
   
    },
    components:{
        Card
    }
}

</script>

<style scoped>
    .title{
        margin: 4rem 0 2rem 0;
    }
    .container-home{
        width: 100%;
    }
    .container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 10px;
    }
    card{
        width: 100%;
    }
</style>