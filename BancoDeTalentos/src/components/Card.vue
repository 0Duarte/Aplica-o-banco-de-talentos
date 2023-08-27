<template>
    <div class="res-container">
        <div class="dataRes">
            <b><span>Nome:</span></b>
            <p>{{name}}</p>
        </div>
        <div class="dataRes">
            <b><span>Email:</span></b>
            <p>{{ email }}</p>
        </div>
        <div class="dataRes">
            <b><span>Data de nascimento:</span></b>
            <p>{{birthday}}</p>
        </div>
        <div class="dataRes">
            <b><span>Whatsapp:</span></b>
            <p>{{whatsapp}}</p>
        </div>
        <div class="dataRes">
            <b><span>Área:</span></b>
            <p>{{area}}</p>
        </div>
        <div class="dataRes">
            <b><span>Formação:</span></b>
            <p>{{level}}</p>
        </div>
        <div class="dataRes">
            <b><span>Habilidades:</span></b>
            <p v-for="item in skills">{{ item}}</p>
        </div>
        <div class="dataRes">
            <b><span>Apresentação:</span></b>
            <p>{{apresentation}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["name", "email", "birthday", "whatsapp", "area","level", "skills", "apresentation"]
    }
</script>

<style scoped>
    .res-container{
        display: flex;
        flex-direction: column;
        gap: 8px;
        border: 1px solid #000;
        padding: 1rem;
    }
    .dataRes{
        display: flex;
        text-transform: capitalize
    }
</style>