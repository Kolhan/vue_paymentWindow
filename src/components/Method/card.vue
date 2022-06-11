<script setup lang="ts">
const props = defineProps({
    fullName: {
        type: String
    },
    cardNumber: {
        type: String
    },
    expiryDate: {
        type: String
    },
})
</script>

<template>
     <div class="grid w-full leading-6 border border-gray-400 p-2">
        <div class="w-16 bg-orange-600 h-8"></div>
        <div class="h-8"></div>
        <div>{{fullName}}</div>
        <div class="flex justify-between text-base">
            <div>{{cardNumber}}</div>
            <div>{{expiryDate}}</div>
        </div>
    </div>
</template>


