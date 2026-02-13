<template>
    <div class="mx-auto max-w-7xl p-6">
        <h1 class="mb-4 text-3xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Add Job</h1>
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
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Internship</option>
            </select>
    
            <!-- Salary -->
            <select v-model="form.salary" class="input">
                <option value="">Select Salary Range</option>
                <option>Under $50k</option>
                <option>$50,000 - $70,000/year</option>
                <option>$70,000 - $90,000/year</option>
                <option>$90,000+</option>
            </select>
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
            class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
            Add Job
            </button>
    
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import {
    API_POST_ADD_JOB
} from '@/api/jobs.js'

const toast = useToast()
const router = useRouter()
const isSubmittingValue = ref(false)

// Use for reset
const state = {
    id: '',
    title:'',
    location:'',
    type:'',
    salary:'',
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

const form = reactive({...state}) // Use for binding

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
        form.id = Math.floor(Math.random() * 9000) + 1000;
        let tempId = form.id

        const {data, status, statusText} = await API_POST_ADD_JOB(form)
        if(!data) {
            toast.error('Error! Please check field information.')
            return
        }

        isSubmittingValue.value = false
        resetForm()
        toast.success('Job was successfully added.')
        router.push(`/jobs/${tempId}`)
    } catch (e) {
        toast.error(e.message || 'Something went wrong.')
    }
}
</script>

<style>

</style>
  