import { defineStore } from 'pinia'
import type { TContact } from './contact'
import type { TCard, TBankAccount } from './method'

const _contact: TContact | undefined = undefined 
const _method: TCard | TBankAccount | undefined = undefined
const _amount: Number | undefined = undefined

export const usePaymentStore = defineStore({
  id: 'payment',
  state: () => ({
    contact: _contact,
    method: _method,
    amount: _amount
  }),
  getters: {
    getMethodTitle: (state) => {
        if (state.method === undefined) return undefined        
       
        const keysObj = Object.keys(state.method)
        const keyTCard = ['fullName', 'cardNumber', 'expiryDate'] 
        const keyTBankAccount = ['accountName', 'accountNumber', 'bsb'] 
        
        // TCARD
        if (JSON.stringify(keysObj) == JSON.stringify(keyTCard))  {
          return  'Card: ' + state.method.fullName
        } 
        // TBANKACCOUNT
        if (JSON.stringify(keysObj) == JSON.stringify(keyTBankAccount))  {
          return 'Bank: ' + state.method.accountName
        }
    },
    getContactTitle: (state) => {
        const item = state.contact
        const _type: string  = typeof(item)
        if (_type == 'object') {
          return  item.firstName + ' ' + item.lastName
        } 
        else {
          return undefined
        }
    }
  },
  actions: {
    clearPayment() {
      this.contact = undefined
      this.method = undefined
      this.amount = undefined
    }
  }
})