import type { TContact } from '@/stores/contact';
import { useContactStore } from '@/stores/contact';

import type { TCard, TBankAccount } from './stores/method';
import { useMethodStore } from './stores/method';

import { usePaymentStore } from './stores/payment';



export const AddNewContact = (contact:TContact) => {
    const contactStore = useContactStore()

    contactStore.$patch((state) => {
        state.listContacts.push(contact)
    })
}

export const AddNewMethod = (method:TCard | TBankAccount) => {
    if (method === undefined) return

    const methodStore = useMethodStore()

    const keysObj = Object.keys(method)
    const keyTCard = ['fullName', 'cardNumber', 'expiryDate'] 
    const keyTBankAccount = ['accountName', 'accountNumber', 'bsb'] 

    methodStore.$patch((state) => {
        // TCARD
        if (JSON.stringify(keysObj) == JSON.stringify(keyTCard))  {
            state.listCards.push(method)
        } 
        // TBANKACCOUNT
        if (JSON.stringify(keysObj) == JSON.stringify(keyTBankAccount))  {
            state.listBankAccounts.push(method)
        }
    })
}

export const Pay = () => {
    const paymentStore = usePaymentStore()

    console.log(paymentStore.contact, paymentStore.method, paymentStore.amount)

    paymentStore.clearPayment()

}