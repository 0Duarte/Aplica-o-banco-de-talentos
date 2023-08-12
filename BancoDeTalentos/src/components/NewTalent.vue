<template>
    <div class="container-form">
        <h1 class="title">Cadastro de talento</h1>
        <form @submit.prevent="handleSubmit" class="form-register">
            <div class="row1">
                <div class="field double-column">
                    <label for="name">Nome Completo</label>
                    <input type="text" id="name" v-model="name" class="red-border" active="false">
                    
                </div>

                <div class="field double-column">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email">
                </div>
            </div>

            <div class="row2">
                <div class="field double-column">
                    <label for="birthday">Data de nascimento</label>
                    <input type="date" id="birthday" v-model="birthday">
                    
                </div>

                <div class="field double-column">
                    <label for="whatsapp">Whatsapp</label>
                    <input type="number" id="whatsapp" v-model="whatsapp">
                </div>
            </div>

            <div class="row3">
                <div class="field">
                    <label for="interest">Área de interesse</label>
                    <select name="interest" id="interest" v-model="area">
                        <option value="front">Front-End</option>
                        <option value="back">Back-End</option>
                        <option value="full">Fullstack</option>
                    </select>
                </div>
            </div>

            <div class="row4">
                <div class="field">
                    <label for="level">Nível profissional</label>
                    <select name="level" id="level" v-model="level">
                        <option value="junior">Junior</option>
                        <option value="pleno">Pleno</option>
                        <option value="senior">Sênior</option>
                    </select>
                </div>
            </div>

            <div class="row6" >
                <span v-if="!area === ''">Suas habilidades</span>
                <div class="check-div" v-if="area === 'front' || area === 'full'">
                    <div class="check-inputs">
                        <input type="checkbox" id="html" value="html" v-model="skills">
                        <label for="html">HTML</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="css" value="css" v-model="skills">
                        <label for="css">CSS</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="javascript" value="javascript" v-model="skills">
                        <label for="javascript">JavaScript</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="react" value="react" v-model="skills">
                        <label for="react">React</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="react-native" value="react-native" v-model="skills">
                        <label for="react-native">React-Native</label>
                    </div>
                </div>
                    
                <div class="check-div" v-if="area === 'back' || area === 'full'">
                    <div class="check-inputs">
                        <input type="checkbox" id="node" value="node" v-model="skills">
                        <label for="node">Node</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="PHP" value="PHP" v-model="skills">
                        <label for="PHP">PHP</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="Laravel" value="Laravel" v-model="skills">
                        <label for="Laravel">Laravel</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="Java" value="Java" v-model="skills">
                        <label for="Java">Java</label>
                    </div>
                    <div class="check-inputs">
                        <input type="checkbox" id="Python" value="Python" v-model="skills">
                        <label for="Python">Python</label>
                    </div>
                </div>
            </div>
            <div class="row7">
                <div class="text-block">
                    <textarea v-model="apresentation" placeholder="Digite aqui sua carta de apresentação" name="aboutyou" id="aboutyou"></textarea>
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
import * as yup from 'yup'
import {captureErrorYup} from "../utils/captureErrorYup"
export default {
    data() {
        return {
            name: "",
            email: "",
            birthday: "",
            whatsapp: "",
            area: "",
            level: "",
            skills: [],
            apresentation: "",
            errors: []
        }
    },
    methods: {
        handleSubmit() {
            
            try {
                const schema = yup.object().shape({
                    name: yup.string().required('O nome é obrigatório'),
                    email: yup.string().email("Email não é valido").required("Email é obrigatório"),
                    area: yup.string().required("A area é obrigatória")
                })

                schema.validateSync({
                    name: this.name,
                    email: this.email,
                    area: this.area
                },
                { abortEarly: false })
                
            } catch(error){
                if (error instanceof yup.ValidationError) {
          this.errors = captureErrorYup(error)
          console.log(this.errors)
            }}

        }

    },
    watch: {
        area(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.skills = []
            }
        }
    }
}
</script>

<style scoped>

.red-border{
    border-color: red;
}
.button {
    display: flex;
    justify-content: end;
}

button {
    background-color: #6563ff;
    color: #fff;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

textarea {
    width: 100%;
    height: 100px;
}
.row6{
    display: flex;
    flex-direction: column;
    }
.check-div {
    display: flex;
    justify-content: space-between;
}

.row6 {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.check-inputs {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 5px;
}

.row1,
.row2 {
    display: flex;
    justify-content: space-between;
}

.double-column {
    width: 45%;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.container-form {
    width: 100%;
}

.title {
    margin: 4rem 0 2rem 0;
}

.form-register {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 600;
    font-size: 0.8rem;
}

input,
select {
    border: 2px solid #cfd9e1;
    border-radius: 2px;
    height: 35px;
}

textarea {
    border: 2px solid #cfd9e1;
    border-radius: 2px;
}

textarea::placeholder {
    padding: 5px;
    color: #cfd9e1;
    font-weight: 600;
}
</style>