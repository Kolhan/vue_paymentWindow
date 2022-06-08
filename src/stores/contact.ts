import { defineStore } from 'pinia'

export type TContact = {
    firstName: String,
    lastName: String,
    email: String
}

const _listContacts: TContact[] = []

export const useContactStore = defineStore({
  id: 'contact',
  state: () => ({ 
    listContacts: _listContacts
  })
})