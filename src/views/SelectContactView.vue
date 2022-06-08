<script setup lang="ts">
import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tHeader from '@/components/UI/tHeader.vue';
import tContainer from '@/components/UI/tContainer.vue';

import { usePaymentStore } from '../stores/payment';
import { useContactStore } from '../stores/contact';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const paymentStore = usePaymentStore()
const { contact, method, amount } = storeToRefs(paymentStore)
const contactStore = useContactStore()
const { listContacts } = storeToRefs(contactStore)
const router = useRouter() 


const setContact = (item) => {
    contact.value = item
    router.push('/')
}

</script>

<template>
    <div class="page">
        <tPageTemplate>
            <!-- HEADER -->
            <template v-slot:header>
                <tHeader>
                    <template v-slot:left><BtnRouterBack>Back</BtnRouterBack></template>
                    Select contact
                    <template v-slot:right><BtnRouter to='newContact'>+</BtnRouter></template>
                </tHeader>
            </template>

            <!-- CONTENT -->
            <tContainer>
                <div class="grid gap-2 ">
                    <button class="grid text-center w-full leading-6 border border-gray-400 p-2" v-for="item in listContacts" 
                        @click="setContact(item)"
                    >
                        <div>{{item.firstName}} {{item.lastName}}</div>
                        <div class="text-base">{{item.email}}</div>
                    </button>
                </div>



            </tContainer>

            <!-- FOOTER -->
            <!-- <template v-slot:footer>
                <tContainer>

                </tContainer>                
            </template> -->
        </tPageTemplate>
    </div>
</template>

<style>

</style>