import { defineStore } from 'pinia'

export type TCard = {
    fullName: String,
    CardNumber: Number,
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
  id: 'contact',
  state: () => ({ 
    listCards: _listCards,
    listBankAccounts: _listBankAccounts
  })
})