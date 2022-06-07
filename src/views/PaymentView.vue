<script setup lang="ts">
import BtnRouter from '../components/BtnRouter.vue';
</script>

<template>
    <div class="page">
        <div class="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-4">   
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Make a payment</h2>
                </div>
                <div>
                    <label>Select contact</label>
                    <BtnRouter to="selectContact">Select contact</BtnRouter>
                </div>
                
                <div>
                    <label>Select payment method</label>
                    <BtnRouter to="selectMethod">Select method</BtnRouter>
                </div>
                
                <div>
                    <label>Enter amount</label>
                    <input type="number" class="border border-gray-400 block w-full py-1 px-2">
                </div>
            </div>
            <BtnRouter to="paymentComplited">Pay</BtnRouter> 
        </div>  
    </div> 
</template>

<script setup lang="ts">

</script>