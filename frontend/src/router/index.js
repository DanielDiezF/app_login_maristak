import Vue from 'vue'
import Router from 'vue-router'
import ZonaUsuarios from '@/pages/zonausuarios'
import Login from '@/pages/login'
import Register from '@/pages/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/zonausuarios',
      name: 'ZonaUsuarios',
      component: ZonaUsuarios
    },{
      path: '/register',
      name: 'Registro',
      component: Register
    }
  ],
  mode:'history'
})
