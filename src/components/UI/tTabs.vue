<script setup lang="ts">
import { ref, computed } from 'vue';

export type TTab = {
    id: String,
    title: String
}  

const props = defineProps({
    btnList: {
        type: Array,
        requare: true
    },
    startTabId: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['onChangeTab']) 
let curTabId = ref(props.startTabId)
const callEmit = (id:string) => {
    emit('onChangeTab', id)
    curTabId.value = id
}

const classActive = (id:string) => {
    let result: String = 'bg-indigo-300'
    if(id == curTabId.value) result = 'bg-indigo-600'
    return result
}
</script>

<template>
    <div class="w-full gap-1 flex justify-around">
        <button 
            class="hover:bg-indigo-700 py-2 px-4 text-white rounded-md disabled:bg-indigo-100 active w-full text-sm"
            v-for="(item in btnList" :key="item.id"
            :class="classActive(item.id)"            
            @click="callEmit(item.id)"> {{item.title}}
        </button>
    </div>
</template>