<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue';
// import BtnRouter from '../components/BtnRouter.vue';
import BtnRouterBack from '@/components/BtnRouterBack.vue';
import tPageTemplate from '@/components/UI/tPageTemplate.vue';
import tHeader from '@/components/UI/tHeader.vue';
import tContainer from '@/components/UI/tContainer.vue';
import tButton from '@/components/UI/tButton.vue';
import tInput from '@/components/UI/tInput.vue';
import { useRouter } from 'vue-router';

import { AddNewContact  } from '@/api'
import type { TContact } from '../stores/contact';

const contact: TContact = reactive({ 
    firstName: '',
    lastName: '',
    email: ''
})

const router = useRouter()
const addNewContact = () => {
    AddNewContact(contact)
    router.push('selectContact')
}

const { firstName, lastName, email } = toRefs(contact)
const formValidate = computed(() => {
    let result: Boolean = false
    if(firstName.value!='' && lastName.value!='' && email.value!='')  result = true
    return result
})

</script>

<template>
    <div class="page">
        <tPageTemplate>
            <!-- HEADER -->
            <template v-slot:header>
                <!-- <div class="text-center w-full">New contact</div> -->
                <tHeader>
                    <template v-slot:left><BtnRouterBack>Back</BtnRouterBack></template>
                    New contact
                </tHeader>
            </template>

            <!-- CONTENT -->
            <tContainer>
                <div class="grid gap-2">
                    <div>
                        <label>First Name</label>
                        <tInput type="text" :value="firstName" @input="(e) => firstName =e.target.value"/>
                    </div>

                    <div>
                        <label>Last name</label>
                        <tInput type="text" :value="lastName" @input="(e) => lastName =e.target.value"/>
                    </div>

                    <div>
                        <label>Email</label>
                        <tInput type="email" :value="email" @input="(e) => email =e.target.value"/>
                    </div>
                </div>
            </tContainer>

            <!-- FOOTER -->
            <template v-slot:footer>
                <tContainer>
                    <tButton @click="addNewContact" :disabled="!formValidate">Save</tButton>
                </tContainer>                
            </template>
        </tPageTemplate>
    </div>
</template>