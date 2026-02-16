<template>
    <div class="mx-auto max-w-7xl p-6" v-if="!isSubmittingValue">
        <h1 class="mb-4 text-3xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Edit Job</h1>
        <form @submit.prevent="submitForm" class="space-y-8 bg-white p-8 rounded-xl shadow">
            <!-- Job Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input v-model="form.title" type="text" placeholder="Job Title"
                class="input"/>
    
            <input v-model="form.location" type="text" placeholder="Location"
                class="input"/>
    
            <!-- Job Type -->
            <select v-model="form.type" class="input">
                <option value="">Select Job Type</option>
                <option selected>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Internship</option>
            </select>
    
            <!-- Salary -->
            <input v-model="form.salary" type="text" placeholder="Salary"
                class="input"/>
            </div>
    
            <!-- Description -->
            <textarea v-model="form.description"
            placeholder="Job Description"
            class="input h-28"></textarea>
    
            <!-- Responsibilities -->
            <div>
            <h3 class="font-semibold mb-2">Responsibilities</h3>
            <div v-for="(item,index) in form.responsibilities" :key="index">
                <input v-model="form.responsibilities[index]"
                class="input mb-2"/>
            </div>
            <button type="button" @click="addResponsibility"
                class="btn-secondary">+ Add Responsibility</button>
            </div>
    
            <!-- Requirements -->
            <div>
            <h3 class="font-semibold mb-2">Requirements</h3>
            <div v-for="(item,index) in form.requirements" :key="index">
                <input v-model="form.requirements[index]"
                class="input mb-2"/>
            </div>
            <button type="button" @click="addRequirement"
                class="btn-secondary">+ Add Requirement</button>
            </div>
    
            <!-- Company -->
            <div class="space-y-4">
            <h3 class="font-semibold">Company Info</h3>
    
            <input v-model="form.company.name"
                placeholder="Company Name"
                class="input"/>
    
            <textarea v-model="form.company.description"
                placeholder="Company Description"
                class="input h-24"></textarea>
    
            <input v-model="form.company.contactEmail"
                placeholder="Contact Email"
                class="input"/>
    
            <input v-model="form.company.contactPhone"
                placeholder="Contact Phone"
                class="input"/>
            </div>
    
            <!-- Submit -->
            <button :disabled="isSubmittingValue.value" type="submit"
            class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
            Update Job
            </button>
    
        </form>
    </div>
    <div v-else class="max-w-4xl mx-auto overflow-hidden">
        <Loader>
            <span class="size-3 animate-ping rounded-full bg-indigo-600"></span>
            <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.2s]"></span>
            <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.4s]"></span>
        </Loader>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter, useRoute } from 'vue-router'
import Loader from '@/components/Loader.vue'
import {
    API_POST_UPDATE_JOB,
    API_GET_JOB_DETAIL
} from '@/api/jobs.js'

const toast = useToast()
const router = useRouter()
const route = useRoute()

const isSubmittingValue = ref(false)
const paramsId = route.params.id

// Use for reset
let state = {
    id: '',
    title:'',
    location:'',
    type:'Full Time',
    salary:'Under $50k',
    description:'',
    responsibilities:['','',''],
    requirements:['','',''],
    company:{
        name:'',
        description:'',
        contactEmail:'',
        contactPhone:''
    }
}

let form = reactive({...state}) // Use for binding

const addResponsibility = () => {
    form.responsibilities.push('')
}
const addRequirement = () => {
    form.requirements.push('')
}
const resetForm = () => {
    Object.assign(form, structuredClone(state))
}
const submitForm = async () => {
    try {
        isSubmittingValue.value = true

        const {data} = await API_POST_UPDATE_JOB({id: form.id, form})
        if(!data) {
            toast.error('Error! Please check field information.')
            return
        }

        isSubmittingValue.value = false
        resetForm()
        toast.success('Job was successfully updated.')
        router.push(`/jobs/${paramsId}`)
    } catch (e) {
        toast.error(e.message || 'Something went wrong. Try again later.')
    }
}
const loadJobDetail = async () => {
    try {
        const { data } = await API_GET_JOB_DETAIL(paramsId)
        Object.assign(form, data)
        form.salary = data.salary || 'Under $50k' // custom - db.json is a mockup
    } catch (e) {
        toast.error(e.message || 'Something went wrong. Try again later.')
    }
}

onMounted(() => {
    loadJobDetail()
})
</script>

<style>

</style>
  