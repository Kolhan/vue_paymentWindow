import { defineStore } from 'pinia'
import type { TContact } from './contact'

const _contact: TContact = {
    firstName: 'tap me',
    lastName: '',
    email: ''
}

export const usePaymentStore = defineStore({
  id: 'payment',
  state: () => ({
    contact: _contact,
    method: 'tap me',
    amount: 0
  }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     increment() {
//       this.counter++
//     }
//   }
})