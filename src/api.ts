import type { TContact } from '@/stores/contact';
import { useContactStore } from '@/stores/contact';

export const AddNewContact = (contact:TContact) => {
    const contactStore = useContactStore()

    contactStore.$patch((state) => {
        state.listContacts.push(contact)
    })
}