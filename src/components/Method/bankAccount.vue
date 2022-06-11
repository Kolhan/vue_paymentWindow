<script setup lang="ts">
const props = defineProps({
    accountName: {
        type: String
    },
    accountNumber: {
        type: String
    },
    bsb: {
        type: String
    },
})
</script>

<template>
     <div class="flex flex-col w-full leading-6 border border-gray-400 p-2">

        <div>{{accountName}}</div>
        <div class="text-base">{{accountNumber}}</div>
        <div class="text-right text-base">{{bsb}}</div>
    </div>
</template>