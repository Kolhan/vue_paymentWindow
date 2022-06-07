<script setup lang="ts">
import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';
import HeaderPage from '@/components/HeaderPage.vue';
</script>

<template>
    <div class="page">
        <HeaderPage/>



        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">   
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Select contact</h2>
                </div>

                <BtnRouter to='newContact'>New Contact</BtnRouter> 
                <BtnRouterBack>Back</BtnRouterBack>      

            </div>
        </div>
    </div>
</template>

<style>

</style>