<script setup lang="ts">
import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tHeader from '@/components/UI/tHeader.vue';
import tContainer from '@/components/UI/tContainer.vue';

import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { usePaymentStore } from '../stores/payment';
import { useMethodStore } from '../stores/method';

const paymentStore = usePaymentStore()
const { contact, method, amount } = storeToRefs(paymentStore)
const router = useRouter() 

const methodStore = useMethodStore()
const { listCards, listBankAccounts } = storeToRefs(methodStore)

const setMethod = (item) => {
    method.value = item
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
                    Select method
                    <template v-slot:right><BtnRouter to='newCard'>+</BtnRouter></template>
                </tHeader>
            </template>

            <!-- CONTENT -->
            <tContainer>
                <label>Credit/debit cards</label>
                <div class="grid gap-2 ">
                    <button class="grid text-center w-full leading-6 border border-gray-400 p-2" v-for="item in listCards" 
                        @click="setMethod(item)"
                    >
                        <div>{{item.fullName}}</div>
                        <div class="text-base">{{item.cardNumber}} {{item.expiryDate}}</div>
                    </button>
                </div>

                <label>Bank accounts</label>
                <div class="grid gap-2 ">
                    <button class="grid text-center w-full leading-6 border border-gray-400 p-2" v-for="item in listBankAccounts" 
                        @click="setMethod(item)"
                    >
                        <div>{{item.accountName}} </div>
                        <div class="text-base">{{item.accountNumber}} {{item.bsb}}</div>
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