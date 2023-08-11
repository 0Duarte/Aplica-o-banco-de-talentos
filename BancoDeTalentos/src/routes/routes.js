import {createRouter, createWebHistory} from 'vue-router'

//importar telas de aplicacao

import NewTalent from '../components/NewTalent.vue'
import Header from '../components/Header.vue'
import About from '../components/About.vue'

//configurar roteamento

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/newtalent',
        name: 'Talent',
        component: NewTalent
    },
    {
        path: '/sobre',
        name: 'about',
        component: About
    },
    {
        path: '/',
        name: 'header',
        component: Header
    }]
}) 
export default router