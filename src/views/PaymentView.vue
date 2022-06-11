<script setup lang="ts">
import { onMounted, computed, onActivated, ref, reactive } from 'vue'
import tButton from '../components/UI/tButton.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tContainer from '@/components/UI/tContainer.vue';
import tInput from '@/components/UI/tInput.vue';

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
                        <tInput 
                            type="text" 
                            :value="contactTitle" 
                            @click="router.push('selectContact')" 
                            placeholder="tap me"
                            readonly
                        />
                    </div>
                    
                    <div>
                        <label>Select payment method</label>
                        <tInput 
                            type="text" 
                            :value="methodTile" 
                            @click="router.push('selectMethod')" 
                            placeholder="tap me"
                            readonly
                        />
                    </div>
                    
                    <div>
                        <label>Enter amount</label>
                        <tInput 
                            type="number" 
                            :value="amount" 
                            @input="onInputAmount" 
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