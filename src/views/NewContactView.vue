<script setup lang="ts">
// import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';
import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tHeader from '@/components/UI/tHeader.vue';
import tContainer from '@/components/UI/tContainer.vue';
</script>

<template>
    <div class="page">
        <tPageTemplate>
            <!-- HEADER -->
            <template v-slot:header>
                <!-- <div class="text-center w-full">New contact</div> -->
                <tHeader>
                    <template v-slot:left><BtnRouterBack>Back</BtnRouterBack></template>
                    New contact
                </tHeader>
            </template>

            <!-- CONTENT -->
            <tContainer>
                <div class="grid gap-2">
                    <div>
                        <label>First Name</label>
                        <input type="text" class="border border-gray-400 block w-full py-1 px-3 pb-3" v-model="amount">
                    </div>

                    <div>
                        <label>Last name</label>
                        <input type="text" class="border border-gray-400 block w-full py-1 px-3 pb-3" v-model="amount">
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" class="border border-gray-400 block w-full py-1 px-3 pb-3" v-model="amount">
                    </div>
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