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
  })
})