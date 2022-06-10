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
  }),
  actions: {
    saveStorage() {
      localStorage.setItem('listContacts', JSON.stringify(this.listContacts));
    },
    loadStorage() {
      const list = localStorage.getItem('listContacts')
      if (list != undefined) this.listContacts = JSON.parse(list);
    }
  }
})