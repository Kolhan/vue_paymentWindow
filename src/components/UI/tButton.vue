<script setup lang="ts">
defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button class="bg-indigo-600 hover:bg-indigo-700 w-full py-2 px-4 text-white rounded-md disabled:bg-indigo-100" :disabled="disabled">
        <slot></slot>
    </button>
</template>
