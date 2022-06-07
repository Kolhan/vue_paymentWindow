import { createRouter, createWebHistory } from 'vue-router'
import PaymentView from '../views/PaymentView.vue'
import SelectContactView from '../views/SelectContactView.vue'
import SelectMethodView from '../views/SelectMethodView.vue'
import PaymentComplitedView from '../views/PaymentComplitedView.vue'
import NewCardView from '../views/NewCardView.vue'
import NewContactView from '../views/NewContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PaymentView,
      meta: {
        enterClass: 'animate__animated animate__fadeInRight',
        leaveClass: 'animate__animated animate__fadeOutLeft',
      }
    },
    {
      path: '/selectContact',
      name: 'selectContact',
      component: SelectContactView,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      }      
    },
    {
      path: '/selectMethod',
      name: 'selectMethod',
      component: SelectMethodView,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      }
    },
    {
      path: '/paymentComplited',
      name: 'paymentComplited',
      component: PaymentComplitedView,
      meta: {
        enterClass: 'animate__animated animate__fadeInUpBig',
        leaveClass: 'animate__animated animate__fadeOutUpBig',
      }
    },
    {
      path: '/newCard',
      name: 'newCard',
      component: NewCardView,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      }
    },
    {
      path: '/newContact',
      name: 'newContact',
      component: NewContactView,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      }
    }
  ]
})

export default router
