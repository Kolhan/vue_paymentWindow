<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { Ref } from 'vue'
// import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tHeader from '@/components/UI/tHeader.vue';
import tContainer from '@/components/UI/tContainer.vue';
import tTabs from '@/components/UI/tTabs.vue';
import tInput from '@/components/UI/tInput.vue';
import tButton from '@/components/UI/tButton.vue';
import type { TTab } from '@/components/UI/tTabs.vue';
import type { TCard, TBankAccount } from '@/stores/method';

import { AddNewMethod  } from '@/api'


const curTabId:Ref<string> = ref('1')
const onChangeTab = (id:string) => {
    curTabId.value = id
}

const tabList:Array<TTab> = [
    {id:'1', title:'Card'},
    {id:'2', title:'Bank account'}
]

const newCard: TCard = reactive({ 
    fullName: undefined,
    cardNumber: undefined,
    expiryDate: undefined
})

const newBank: TBankAccount = reactive({ 
    accountName: undefined,
    accountNumber: undefined,
    bsb: undefined
})

const formValidate = computed(() => {
    let result: Boolean = false   
    
    // CARD
    if (curTabId.value == tabList[0].id) {
        if(
            (newCard.fullName !== '' && newCard.fullName !== undefined) 
            && (newCard.cardNumber !== 0 && newCard.cardNumber !== undefined) 
            && (newCard.expiryDate !== '' && newCard.expiryDate !== undefined)
        )   result = true
    }
    // BANK ACCOUNT
    if (curTabId.value == tabList[1].id) {
        if(
            (newBank.accountName !== '' && newBank.accountName !== undefined) 
            && (newBank.accountNumber !== 0 && newBank.accountNumber !== undefined) 
            && (newBank.bsb !== '' && newBank.bsb !== undefined)
        )   result = true
    }
    
    return result
})

const router = useRouter()
const addNewMethod = () => {
    if (curTabId.value == tabList[0].id) {
        AddNewMethod(newCard)
    }
    if (curTabId.value == tabList[1].id) {
        AddNewMethod(newBank)
    }
    router.push('selectMethod')
}

</script>

<template>
    <div class="page">
        <tPageTemplate>
            <!-- HEADER -->
            <template v-slot:header>
                <!-- <div class="text-center w-full">New contact</div> -->
                <tHeader>
                    <template v-slot:left><BtnRouterBack>Back</BtnRouterBack></template>
                    New card
                </tHeader>
            </template>

            <!-- CONTENT -->
            <tContainer>
                <tTabs @onChangeTab="onChangeTab" :btnList="tabList" :startTabId="curTabId"></tTabs>   
                
                <!-- CARD -->
                <div v-if="curTabId==tabList[0].id">
                    <tContainer>
                        <div class="grid gap-2">
                            <div>
                                <label>Full Name</label>
                                <tInput type="text" :value="newCard.fullName" @input="(e) => newCard.fullName =e.target.value"/>
                            </div>

                            <div>
                                <label>Card number</label>
                                <tInput type="number" :value="newCard.cardNumber" @input="(e) => newCard.cardNumber =e.target.value"/>
                            </div>

                            <div>
                                <label>Expiry date</label>
                                <tInput type="text" :value="newCard.expiryDate" @input="(e) => newCard.expiryDate =e.target.value" placeholder="MM/YY"/>
                            </div>
                        </div>
                    </tContainer>
                </div>

                <!-- BANK ACCOUNT -->
                <div v-if="curTabId==tabList[1].id">
                    <tContainer>
                        <div class="grid gap-2">
                            <div>
                                <label>Account Name</label>
                                <tInput type="text" :value="newBank.accountName" @input="(e) => newBank.accountName =e.target.value"/>
                            </div>

                            <div>
                                <label>Account number</label>
                                <tInput type="number" :value="newBank.accountNumber" @input="(e) => newBank.accountNumber =e.target.value" placeholder="##########"/>
                            </div>

                            <div>
                                <label>BSB</label>
                                <tInput type="text" :value="newBank.bsb" @input="(e) => newBank.bsb =e.target.value" placeholder="###-###"/>
                            </div>
                        </div>
                    </tContainer>
                </div>
            </tContainer>

            <!-- FOOTER -->
            <template v-slot:footer>
                <tContainer>
                    <tButton @click="addNewMethod" :disabled="!formValidate">Save</tButton>
                </tContainer>
            </template>
        </tPageTemplate>
    </div>
</template>