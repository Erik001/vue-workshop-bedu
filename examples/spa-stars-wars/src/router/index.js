import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home/home'
import PersonView from '@/views/person/person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/person/:id',
      name: 'Person',
      component: PersonView
    }
  ]
})
