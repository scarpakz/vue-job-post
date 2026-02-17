<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-50 py-10 px-4">
      
        <div class="max-w-7xl mx-auto py-3">
            <BackButton />
        </div>
    
        <div
            v-if="!isLoading"
            class="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
            
            <!-- HEADER -->
            <div class="p-8 border-b bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <span
                class="inline-block bg-white/20 backdrop-blur px-4 py-1 text-sm rounded-full font-semibold"
            >
                {{ job?.type }}
            </span>
    
            <h1 class="mt-4 text-4xl font-bold">
                {{ job?.title }}
            </h1>
    
            <div class="mt-4 flex flex-wrap gap-6 text-indigo-100 text-sm">
                <span class="flex items-center gap-2">
                <i class="pi pi-map-marker text-red-300"></i>
                {{ job?.location }}
                </span>
                <span class="flex items-center gap-2">
                <i class="pi pi-wallet"></i>
                {{ job?.salary }}
                </span>
            </div>
            </div>
    
            <!-- CONTENT -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
    
            <!-- LEFT SIDE (Job Details) -->
            <div class="lg:col-span-2 space-y-8">
    
                <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-3">
                    Job Description
                </h2>
                <p class="text-gray-700 leading-relaxed">
                    {{ job?.description }}
                </p>
                </div>
    
                <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-3">
                    Responsibilities
                </h2>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                    <li v-for="i in job?.responsibilities" :key="i">
                    {{ i }}
                    </li>
                </ul>
                </div>
    
                <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-3">
                    Requirements
                </h2>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                    <li v-for="i in job?.requirements" :key="i">
                    {{ i }}
                    </li>
                </ul>
                </div>
            </div>
    
            <!-- RIGHT SIDE (Company Info Card) -->
            <div class="bg-gray-50 rounded-2xl p-6 shadow-md space-y-5 h-fit border">
    
                <h2 class="text-xl font-bold text-gray-900 border-b pb-3">
                Company Information
                </h2>
    
                <div>
                <p class="text-sm text-gray-500">Company Name</p>
                <p class="font-semibold text-gray-800">
                    {{ job?.company?.name }}
                </p>
                </div>
    
                <div>
                <p class="text-sm text-gray-500">Contact Phone</p>
                <p class="font-semibold text-gray-800">
                    {{ job?.company?.contactPhone }}
                </p>
                </div>
    
                <div>
                <p class="text-sm text-gray-500">Contact Email</p>
                <p class="font-semibold text-indigo-600 break-words">
                    {{ job?.company?.contactEmail }}
                </p>
                </div>
    
                <div>
                <p class="text-sm text-gray-500">Company Description</p>
                <p class="text-gray-700 text-sm leading-relaxed">
                    {{ job?.company?.description }}
                </p>
                </div>
    
            </div>
            </div>
    
            <!-- FOOTER ACTIONS -->
            <div
            class="p-6 bg-gray-50 border-t flex flex-col sm:flex-row gap-4 justify-end"
            >
            <RouterLink
                :to="{ name: 'job-edit', params: { id: job?.id } }"
                class="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium text-center"
            >
                Edit
            </RouterLink>
    
            <button
                @click="deleteJob(job?.id)"
                class="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition font-medium cursor-pointer"
            >
                Delete
            </button>
            </div>
        </div>
  
      <!-- LOADER -->
      <div v-else class="max-w-4xl mx-auto overflow-hidden">
        <Loader>
          <span class="size-3 animate-ping rounded-full bg-indigo-600"></span>
          <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.2s]"></span>
          <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.4s]"></span>
        </Loader>
      </div>
  
    </div>
</template>
  
<style></style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import Loader from '@/components/Loader.vue';
import BackButton from '@/components/BackButton.vue';
import { useToast } from 'vue-toastification'
import {
    API_GET_JOB_DETAIL,
    API_POST_DELETE_JOB
} from '@/api/jobs.js'

const route = useRoute();
const router = useRouter();
const toast = useToast();
const paramsId = route.params.id;
const job = ref({})
const isLoading = ref(false)

const onLoadJobDetail = async () => {
    try {
        isLoading.value = true
        const {data, status, statusText} = await API_GET_JOB_DETAIL(paramsId)
        job.value = data
    } catch (e) {
        console.error(e)
        throw e
    } finally {
        isLoading.value = false
    }
}

const deleteJob = async (jobId) => {
    try {
        isLoading.value = true
        const confirmation = window.confirm('Do you wish to delete this job permanently?')
        if(confirmation){
            const {data,status,statusText} = await API_POST_DELETE_JOB(jobId)
            toast.success('Job successfully deleted.') 
            router.push({name:'jobs'})
        }
    } catch (e) {
        toast.error('Failed to delete job.')
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    onLoadJobDetail()
})

</script>