<script setup lang="ts">
const props = defineProps ({
    model: {
        type: Object
    }, 
    placeholder: {
        type: String
    }, 
    type: {
        type: String,
        default: 'text'
    },
    value: {
        type: Object
    },
    readonly: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <input 
        class="border border-gray-400 block w-full py-1 px-3 pb-3" 
        :value="value" 
        :placeholder="placeholder"
        :type="type"
        :readonly="readonly"
    />
</template>

