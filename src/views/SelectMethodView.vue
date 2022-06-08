<script setup lang="ts">
import BtnRouter from '../components/BtnRouter.vue';
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
                <tHeader>
                    <template v-slot:left><BtnRouterBack>Back</BtnRouterBack></template>
                    Select method
                    <template v-slot:right><BtnRouter to='newCard'>+</BtnRouter></template>
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