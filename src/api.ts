import type { TContact } from '@/stores/contact';
import { useContactStore } from '@/stores/contact';

import type { TCard, TBankAccount } from './stores/method';
import { useMethodStore } from './stores/method';

import { usePaymentStore } from './stores/payment';



export const AddNewContact = (contact:TContact) => {
    const contactStore = useContactStore()
    contactStore.addNewContact(contact)
}

export const AddNewMethod = (method:TCard | TBankAccount) => {
    const methodStore = useMethodStore()
    methodStore.addNewMethod(method)    
}

export const Pay = () => {
    const paymentStore = usePaymentStore()

    console.log(paymentStore.contact, paymentStore.method, paymentStore.amount)

    paymentStore.clearPayment()

}