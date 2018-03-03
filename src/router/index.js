import Vue from 'vue'
import Router from 'vue-router'
import all from '../components/all.vue'
import finished from '../components/finished.vue'
import deleted from '../components/deleted.vue'
import detail from '../components/detail.vue'
import detail2 from '../components/detail2.vue'

import '../common/stylus/index.styl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/all/detail'
    },
    {
      path: '/all',
      redirect: '/all/detail',
      component: all,
      children: [
        {
          path: '/all/detail',
          name: 'detail',
          component: detail
        },
        {
          path: '/all/detail2',
          name: 'detail2',
          component: detail2
        }
      ]
    },
    {
      path: '/finished',
      name: 'finished',
      component: finished
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: deleted
    }
  ],
  linkActiveClass: 'active'
})
