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
    addNewContact(newContact: TContact) {
      this.$patch(() => {
        this.listContacts.push(newContact)
      })

      localStorage['listContacts'] = JSON.stringify(this.listContacts);
    },
    loadStorage() {
      if (localStorage['listContacts']) {
        const list = JSON.parse(localStorage['listContacts']);
        this.listContacts = list;
      }
    }
  }
})