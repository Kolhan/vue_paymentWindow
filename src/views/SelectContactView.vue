<script setup lang="ts">
import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tHeader from '@/components/UI/tHeader.vue';
import tContainer from '@/components/UI/tContainer.vue';

import { usePaymentStore } from '../stores/payment';
import { storeToRefs } from 'pinia'

const paymentStore = usePaymentStore()
const { contact, method, amount } = storeToRefs(paymentStore)
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