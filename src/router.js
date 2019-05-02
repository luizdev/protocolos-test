import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Evaluacion from './views/Evaluacion.vue'
import Informes from './views/Informes.vue'
import Generacion_pago from './views/Generacion_pago.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/evaluacion',
      name: 'evaluacion',
      component: Evaluacion
    },
    {
      path: '/informes',
      name: 'informes',
      component: Informes
    },
    {
      path: '/generacion-pago',
      name: 'generacionpago',
      component: Generacion_pago
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
