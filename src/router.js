import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pages/Home.vue'
import Login from './views/Login.vue'
import DashView from './views/Dash.vue'
import Evaluacion from './views/pages/Evaluacion.vue'
import Informes from './views/pages/Informes.vue'
import Generacion_pago from './views/pages/Generacion_pago.vue'

Vue.use(Router)

export default new Router({
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
          path: 'informes',
          name: 'informes',
          component: Informes
        },
        {
          path: 'generacion-pago',
          name: 'generacionpago',
          component: Generacion_pago
        }
      ]
    }






    /*

    
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
      component: () => import('./views/About.vue')
    }*/
  ]
})
