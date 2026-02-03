<template>
    <div class="mx-auto mt-16">
        <section class="py-16 bg-gray-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Available Jobs</h2>
                
                <!-- Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="!isLoading">
                    <Lists 
                    v-for="job in jobs.slice(0, limit || jobs.length)"
                    :job="job"
                    :key="job.id"
                    />
                </div>
                <Loader v-else>
                    <span class="size-3 animate-ping rounded-full bg-indigo-600"></span>
                    <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.2s]"></span>
                    <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.4s]"></span>
                </Loader>
            </div>

            <div class="flex justify-center mt-8"
            v-if="showButton"
            >
                <RouterLink
                    :to="{ name: 'jobs' }"
                    type="button"
                    class="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition cursor-pointer"
                >
                    View All Jobs
                </RouterLink>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import {ref, onMounted} from 'vue'
import { RouterLink } from 'vue-router'
import { appConfig } from '@/config/config.js'
import Lists from '@/components/joblists/Lists.vue'
import Loader from '@/components/Loader.vue'
import axios from 'axios'

defineProps({
    limit: { 
        default: 10
    },
    showButton: {
        type: Boolean,
        default: false
    }
})
const jobs = ref([])
const isLoading = ref(true)

/**
 * Get all jobs
 */
const getData = async () => {
    try {
        const response = await axios.get(`${appConfig.appBackend}/jobs`)
        jobs.value = response.data
    } catch (e) { console.error(e.status, e.message)
    } finally { isLoading.value = false }
}
onMounted(() => {
    getData()
})

</script>