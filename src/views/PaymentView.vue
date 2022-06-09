<script setup lang="ts">
import BtnRouter from '../components/BtnRouter.vue';
import tInput from '../components/UI/tInput.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tContainer from '@/components/UI/tContainer.vue';

import { usePaymentStore } from '../stores/payment';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';


const paymentStore = usePaymentStore()
const { contact, method, amount } = storeToRefs(paymentStore)
const router = useRouter()

</script>

<template>
    <div class="page">
        <tPageTemplate>
            <!-- HEADER -->
            <template v-slot:header>
                <tContainer><div class="flex justify-center">Make a payment</div></tContainer>
            </template>

            <!-- CONTENT -->
            <tContainer>
                <div class="grid gap-4">
                <div>
                    <label>Select contact</label>
                    <input 
                        type="text" 
                        @click="router.push('selectContact')" 
                        class="border border-gray-400 block w-full py-1 px-3 pb-3 placeholder-slate-400" 
                        :value="contact.firstName + ' ' + contact.lastName" 
                        placeholder="selectContact"
                        readonly
                    />
                </div>
                
                <div>
                    <label>Select payment method</label>
                    <input 
                        type="text" 
                        @click="router.push('selectMethod')" 
                        class="border border-gray-400 block w-full py-1 px-3 pb-3 placeholder-slate-400" 
                        :value="method" 
                        placeholder="selectContact"
                        readonly
                    />
                </div>
                
                <div>
                    <label>Enter amount</label>
                    <input type="number" class="border border-gray-400 block w-full py-1 px-2" v-model="amount">
                </div>
                </div>
            </tContainer>

            <!-- FOOTER -->
            <template v-slot:footer>
                <tContainer>
                    <BtnRouter to="paymentComplited">Pay</BtnRouter> 
                </tContainer>                
            </template>
        </tPageTemplate>
<!-- 

        <div class="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-4">   
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Make a payment</h2>
                </div>
                
            </div>
            
        </div>   -->
    </div> 
</template>