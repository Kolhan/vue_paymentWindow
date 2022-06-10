<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Ref } from 'vue'
// import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';

import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tHeader from '@/components/UI/tHeader.vue';
import tContainer from '@/components/UI/tContainer.vue';
import tTabs from '@/components/UI/tTabs.vue';
import type { TTab } from '@/components/UI/tTabs.vue';

const curTabId:Ref<string> = ref('1')
const onChangeTab = (id:string) => {
    curTabId.value = id
}

const btnList:Array<TTab> = [
    {id:'1', title:'Card'},
    {id:'2', title:'Bank account'}
]
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
                <tTabs @onChangeTab="onChangeTab" :btnList="btnList" :startTabId="curTabId"></tTabs>   
                
                <!-- CARD -->
                <div v-if="curTabId==btnList[0].id">
                    <tContainer>
                        <div class="grid gap-2">
                            <div>
                                <label>Full Name</label>
                                <input type="text" class="border border-gray-400 block w-full py-1 px-3 pb-3" >
                            </div>

                            <div>
                                <label>Card number</label>
                                <input type="number" class="border border-gray-400 block w-full py-1 px-3 pb-3">
                            </div>

                            <div>
                                <label>Expiry date</label>
                                <input type="text" class="border border-gray-400 block w-full py-1 px-3 pb-3">
                            </div>
                        </div>
                    </tContainer>
                </div>

                <!-- BANK ACCOUNT -->
                <div v-if="curTabId==btnList[1].id">
                    <tContainer>
                        <div class="grid gap-2">
                            <div>
                                <label>Account Name</label>
                                <input type="text" class="border border-gray-400 block w-full py-1 px-3 pb-3">
                            </div>

                            <div>
                                <label>Account number</label>
                                <input type="number" class="border border-gray-400 block w-full py-1 px-3 pb-3">
                            </div>

                            <div>
                                <label>BSB</label>
                                <input type="text" class="border border-gray-400 block w-full py-1 px-3 pb-3">
                            </div>
                        </div>
                    </tContainer>
                </div>
            </tContainer>

            <!-- FOOTER -->
            <template v-slot:footer>
                <tContainer>
                    <BtnRouterBack>Save</BtnRouterBack>
                </tContainer>                
            </template>
        </tPageTemplate>
    </div>
</template>