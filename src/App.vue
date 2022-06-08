<script setup lang="ts">
// import 'animate.css';

</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <transition 
      :enter-active-class="route.meta.enterClass"
      :leave-to-class="route.meta.leaveClass"
    >
      <component :is="Component"/>
    </transition>
  </RouterView>
</template>

<style>
  .page {
    position: absolute;
    top: 0;
    width: 100%;
    font-size: x-large;
  }

  /* .fade-enter-from, 
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, 
  .fade-leave-active {
    transition: opacity 0.5s ease-out
  } */
</style>

