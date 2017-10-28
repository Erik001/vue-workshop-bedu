import Vue from 'vue'
import Router from 'vue-router'
import PeopleView from '@/views/PeopleView'
import PersonView from '@/views/PersonView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PeopleView',
      component: PeopleView
    },
    {
      path: '/person/:id',
      name: 'PersonView',
      component: PersonView
    }
  ]
})
