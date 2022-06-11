import { defineStore } from 'pinia'

export type TCard = {
    fullName: String,
    cardNumber: Number,
    expiryDate: String
}

export type TBankAccount= {
    accountName: String,
    accountNumber: Number,
    bsb: String
}

const _listCards: TCard[] = []
const _listBankAccounts: TBankAccount[] = []

export const useMethodStore = defineStore({
  id: 'method',
  state: () => ({ 
    listCards: _listCards,
    listBankAccounts: _listBankAccounts
  }),
  actions: {
    addNewMethod(newMethod: TCard | TBankAccount) {
      if (newMethod === undefined) return

      const keysObj = Object.keys(newMethod)
      const keyTCard = ['fullName', 'cardNumber', 'expiryDate'] 
      const keyTBankAccount = ['accountName', 'accountNumber', 'bsb'] 

      this.$patch(() => {
          // TCARD
          if (JSON.stringify(keysObj) == JSON.stringify(keyTCard))  {
              this.listCards.push(newMethod)
              localStorage['listCards'] = JSON.stringify(this.listCards);
          } 
          // TBANKACCOUNT
          if (JSON.stringify(keysObj) == JSON.stringify(keyTBankAccount))  {
              this.listBankAccounts.push(newMethod)
              localStorage['listBankAccounts'] = JSON.stringify(this.listBankAccounts);
          }
      })
    },
    loadStorage() {
      if (localStorage['listCards']) {
        const list = JSON.parse(localStorage['listCards']);
        this.listCards = list;
      }
      if (localStorage['listBankAccounts']) {
        const list = JSON.parse(localStorage['listBankAccounts']);
        this.listBankAccounts = list;
      }
    }
  }
})