import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home/home'
import PersonView from '@/views/person/person'
import FilmsView from '@/views/films/Films'
import PlanetsView from '@/views/planets/planets'

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
    },
    {
      path: '/films',
      name: 'Films',
      component: FilmsView
    },
    {
      path: '/planets',
      name: 'Planets',
      component: PlanetsView
    }
  ]
})
