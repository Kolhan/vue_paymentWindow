<script setup lang="ts">
import tContainer from './tContainer.vue';
</script>

<template>
    <div class=" border-b border-slate-400">
        <tContainer>
            <div class="grid gap-1 items-center btn-header-btn">
                <div class="min-w-60">
                    <slot name="left"></slot>
                </div>
                <div class="flex justify-center">
                    <slot></slot>
                </div>
                <div class="min-w-60">
                    <slot name="right"></slot>
                </div>
            </div>
        </tContainer>
    </div>
</template>

<style scoped>
    .btn-header-btn {
        grid-template-columns: auto 1fr auto; 
    }

    .min-w-60 {
        min-width: 60px;
    }
</style>