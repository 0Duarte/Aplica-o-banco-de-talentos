<template>
  <div class="container-app">
    <div id="black-stripe"></div>
            <div class="header">
                <div class="buttons-div">
                    <router-link to="/" class="buttons-header">
                      <p><router-link to="/cadastro">Home</router-link></p>
                        <img src="./assets//icons/392500_estate_home_house_real_icon.png" alt="">
                    </router-link>
                </div>
                <div class="buttons-div">
                    <router-link to="/newtalent" class="buttons-header">
                      <p>Talentos</p>
                        <img src="./assets/icons/8725795_folder_open_icon.svg" alt="">
                    </router-link>
                </div>
                <div class="buttons-div">
                    <router-link to="/sobre" class="buttons-header">
                      <p>Sobre</p>
                        <img src="./assets/icons/2931180_about_info_information_chat_service_icon.png" alt="">
                    </router-link>
                </div>
            </div>
            
    <router-view></router-view>
  </div>
</template>

<script>
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
    img{
        width: 40px;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }
    .buttons-header{
        border: 3px solid #cfd9e1;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        gap: 10px;
    }
    .header a{
        text-decoration: none;
        color: inherit;
    }
    .buttons-div{
        width:30%;
        }
    #black-stripe{
        height: 3vh;
        width: 100vw;
        background-color: #9eadba;
        margin-bottom: 2rem;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .text{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>