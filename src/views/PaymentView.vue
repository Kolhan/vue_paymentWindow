<script setup lang="ts">
import { onMounted, computed, onActivated, ref, reactive } from 'vue'
import tButton from '../components/UI/tButton.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tContainer from '@/components/UI/tContainer.vue';

import { usePaymentStore } from '../stores/payment';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
import { Pay } from '../api';


const paymentStore = usePaymentStore()
const { amount } = storeToRefs(paymentStore)

const router = useRouter()


let contactTitle = ref('')
let methodTile = ref('')
onMounted(() => {
  contactTitle.value = paymentStore.getContactTitle
  methodTile.value = paymentStore.getMethodTitle
})

const setPay = () => {
    Pay()

    router.push('paymentComplited')
}

const formValidate = computed(() => {
    let result: Boolean = false
    if( (contactTitle.value != '' && contactTitle.value != undefined)
        && (methodTile.value != '' && methodTile.value != undefined)
        && amount.value > 0)  result = true
    return result
})

const onInputAmount = (event) => {
    paymentStore.$patch((state) => {
        state.amount = event.target.value
    })
}

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
                            :value="contactTitle" 
                            placeholder="tap me"
                            readonly
                        />
                    </div>
                    
                    <div>
                        <label>Select payment method</label>
                        <input 
                            type="text" 
                            @click="router.push('selectMethod')" 
                            class="border border-gray-400 block w-full py-1 px-3 pb-3 placeholder-slate-400" 
                            :value="methodTile" 
                            placeholder="tap me"
                            readonly
                        />
                    </div>
                    
                    <div>
                        <label>Enter amount</label>
                        <input 
                            type="number" 
                            class="border border-gray-400 block w-full py-1 px-3 pb-3 placeholder-slate-400" 
                            :onInput="onInputAmount" 
                            :value = 'amount'
                            placeholder="0"
                        />
                    </div>
                </div>
            </tContainer>

            <!-- FOOTER -->
            <template v-slot:footer>
                <tContainer>
                    <tButton @click="setPay" :disabled="!formValidate">Pay</tButton>
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