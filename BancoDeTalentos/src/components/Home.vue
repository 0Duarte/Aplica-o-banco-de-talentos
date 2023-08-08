<template>
    <Head />
    <div class="container-form">
        <h1 class="title">Cadastro de talento</h1>
        <form class="form-register">
            <div class="row1">
                <div class="field double-column">
                    <label for="name">Nome Completo</label>
                    <input type="text" id="name">
                </div>

                <div class="field double-column">
                    <label for="email">Email</label>
                    <input type="email" id="email">
                </div>
            </div>

            <div class="row2">
                <div class="field double-column">
                    <label for="birthday">Data de nascimento</label>
                    <input type="date" id="birthday">
                </div>

                <div class="field double-column">
                    <label for="whatsapp">Whatsapp</label>
                    <input type="number" id="whatsapp">
                </div>
            </div>

            <div class="row3">
                <div class="field">
                    <label for="interest">Área de interesse</label>
                    <select name="interest" id="interest">
                        <option selected value=""></option>
                    </select>
                </div>
            </div>
            
            <div class="row4">
                <div class="field">
                    <label for="level">Nível profissional</label>
                    <select name="level" id="level">
                        <option selected value=""></option>
                    </select>
                </div>
            </div>
            <div class="row6">
                <span>Suas habilidades</span>
                <div class="check-div">
                    <div class="check-inputs">
                        <input type="checkbox" id="html" value="html">
                        <label for="html">HTML</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="css" value="css">
                        <label for="css">CSS</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="javascript" value="javascript">
                        <label for="javascript">JavaScript</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="react" value="react">
                        <label for="react">React</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="react-native" value="react-native">
                        <label for="react-native">React-Native</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="node" value="node">
                        <label for="node">Node</label>
                    </div>
                </div>
            </div>
            <div class="row7">
                <div class="text-block">
                    <textarea placeholder="Digite aqui sua carta de apresentação" name="aboutyou" id="aboutyou" ></textarea>
                </div>
            </div>
            <div class="row8">
                <div class="button">
                    <button type="submit">Cadastrar</button>
                </div>
            </div>
            
        </form>
    </div>
</template>

<script>
import Head from "../components/Head.vue"
export default {
    components: {
        Head
    }
}
</script>

<style scoped>

.button{
    display: flex;
    justify-content: end;
}
button{
    background-color: #6563ff;
    color: #fff;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}
textarea{
    width: 100%;
    height: 100px;
}
.check-div{
    display: flex;
    justify-content: space-between;
}
.row6{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.check-inputs{
    display: flex;
    align-items: center;
    gap: 5px;
}

.row1, .row2{
    display: flex;
    justify-content: space-between;
}
.double-column{
    width: 45%;
}
.field{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.container-form{
    width: 100%;
}
.title {
    margin: 4rem 0 2rem 0;
}
.form-register{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 600;
    font-size: 0.8rem;
}
input, select{
    border: 2px solid #cfd9e1;
    border-radius: 2px;
    height: 35px;
}

textarea{
    border: 2px solid #cfd9e1;
    border-radius: 2px;
}

textarea::placeholder{
    padding: 5px;
    color: #cfd9e1;
    font-weight: 600;
}

</style>