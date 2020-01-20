import Vue from 'vue';
import VueRouter from 'vue-router';
import InternList from '../views/InternList';
import InternAdd from '../views/InternAdd';
import InternEdit from '../views/InternEdit';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'intern-list',
    component: InternList
  },
  {
    path: '/intern-add',
    name: 'intern-add',
    component: InternAdd
  },
  {
    path: '/intern-edit/:id',
    name: 'intern-edit',
    component: InternEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
