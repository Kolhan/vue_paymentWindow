import { defineStore } from 'pinia'

export const usePaymentStore = defineStore({
  id: 'payment',
  state: () => ({
    contact: 'Вася Пупкин',
    method: 'Картой',
    amount: 4000
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