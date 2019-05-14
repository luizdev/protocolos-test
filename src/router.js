import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pages/Home.vue'
import Login from './views/Login.vue'
import DashView from './views/Dash.vue'
import Informacion from './views/pages/Informacion.vue'
import Evaluacion from './views/pages/Evaluacion.vue'
import Informes from './views/pages/Informes.vue'
import Generacion_pago from './views/pages/Generacion_pago.vue'
import Crear_protocolo from './views/pages/Crear_protocolo.vue'
import Crear_pestana from './views/pages/Crear_pestana.vue'
import Todos_protocolos from './views/pages/Todos_protocolos.vue'
import middlewareAuth from '@/middleware/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: DashView,
      children: [
        {
          path: 'dashboard',
          alias: '',
          component: Home,
          name: 'Home',
          meta: {description: 'Overview of environment'}
        },
        {
          path: 'evaluacion',
          name: 'evaluacion',
          component: Evaluacion
        },
        {
          path: 'informacion',
          name: 'informacion',
          component: Informacion
        },
        {
          path: 'informes',
          name: 'informes',
          component: Informes
        },
        {
          path: 'generacion-pago',
          name: 'generacionpago',
          component: Generacion_pago
        },
        {
          path: '/protocolos/',
          name: 'protocolos',
          component: Home
        },
        {
          path: '/protocolos/todos-protocolos',
          name: 'todos',
          component: Todos_protocolos
        },
        {
          path: '/protocolos/crear-protocolo',
          name: 'crearprotocolo',
          component: Crear_protocolo
        },
        {
          path: '/protocolos/crear-pestana',
          name: 'crearpestana',
          component: Crear_pestana
        },
      ]
    }
  ]
})
