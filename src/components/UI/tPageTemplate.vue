<template>
    <div class="grid gap-2 page-template">
        <div class="">
            <slot name="header"></slot>
        </div>
        <div class="">
            <slot></slot>
        </div>
        <div class="">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
    .page-template {
        grid-template-rows: auto 1fr auto;
        height: 100vh;
    }
</style>