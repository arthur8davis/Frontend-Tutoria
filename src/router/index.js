import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/dirschool',
        name: 'student',
        component: () => import('../views/Student.vue')
    },
    {
      path: '/dirdepartament',
      name: 'teacher',
      component: () => import('../views/Teacher.vue')
    },
    {
      path: '/coordinator',
      name: 'coordinator',
      component: () => import('../views/Coordinator.vue')
    },
    {
      path: '/teacher',
      name: 'tutor',
      component: () => import('../views/Tutor.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/solicitud',
      name: 'solicitud',
      component: () => import('../views/SolicitudC.vue')
    },
    {
      path: '/estudiante',
      name: 'estudiante',
      component: () => import('../views/Estudiante.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


// export default new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes: [
//         {
//             path: '/Asignar',
//             name: 'Asignar',
//             component: () => import('../views/Asignar.vue')
//         }
//     ]
// })