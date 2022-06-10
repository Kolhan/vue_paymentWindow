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
      const _type: string  = typeof(state.method)
      console.log('call GETTERS getMethodTitle - ' + _type);
      
      
      

      switch (_type) {
        case 'TCard': return  state.method != undefined ? 'Card: ' + state.method.fullName : ''
        case 'TBankAccount': return state.method != undefined ? 'Bank: ' + state.method.accountName : ''
        default: return undefined
      }
    },
    getContactTitle: (state) => {
      const item = state.contact
      const _type: string  = typeof(item)
      if (_type == 'object') {
        // console.log('call GETTERS getContactTitle - ' + _type);
        // console.log(item.firstName + ' ' + item.lastName)
        return  item.firstName + ' ' + item.lastName
      } 
      else {
        return undefined
      }

      // const _type: string  = typeof(state.contact)
      // console.log('call GETTERS getContactTitle - ' + _type);
      // // console.log(state.method instanceof TContact);
      // console.log(state.contact)

      // switch (_type) {
      //   case 'TContact': return  state.contact != undefined ? state.contact.firstName + state.contact.lastName : ''
      //   default: return undefined
      // }
    }
  },
  // actions: {
  //   getMethodTitle() {
  //     const _type: string  = typeof(this.method)
  //     console.log('call getMethodTitle - ' + _type);

  //     switch (_type) {
  //       case 'TCard': return  this.method != undefined ? 'Card: ' + this.method.fullName : ''
  //       case 'TBankAccount': return this.method != undefined ? 'Bank: ' + this.method.accountName : ''
  //       default: return undefined
  //     }
  //   },
  //   getContactTitle() {
  //     const _type: string  = typeof(this.method)
  //     console.log('call getContactTitle - ' + _type);

  //     switch (_type) {
  //       case 'TContact': return  this.contact != undefined ? this.method.firstName + this.method.lastName : ''
  //       default: return undefined
  //     }
  //   }
  // }
})