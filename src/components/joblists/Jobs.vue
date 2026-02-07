<template>
    <div class="mx-auto mt-16">
        <section class="py-16 bg-gray-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Available Jobs</h2>
                <label for="Headline">
                    <span class="text-sm font-medium text-gray-700"> Show by </span>

                    <select v-model="selectedQuantity" name="Headline" id="Headline" class="m-3 p-2 w-50 cursor-pointer rounded border-gray-300 shadow-sm sm:text-sm">
                        <option 
                            v-for="item in filterQuantity" 
                            :key="item"
                            :value="item"
                            >
                            {{ item === 'all' ? 'Show All Jobs' : item }}
                        </option>
                    </select>
                </label>
                <!-- Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="!state.isLoading">
                    <Lists 
                    v-for="job in state.jobs.slice(0, (selectedQuantity === 'all' ? state.jobs.length : selectedQuantity) || state.jobs.length)"
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
import {ref, onMounted, reactive} from 'vue'
import { RouterLink } from 'vue-router'
import Lists from '@/components/joblists/Lists.vue'
import Loader from '@/components/Loader.vue'
import axios from 'axios'
import {
    API_GET_JOBS
} from '@/api/jobs.js'

defineProps({
    showButton: {
        type: Boolean,
        default: false
    }
})
const state = reactive({
    jobs: [],
    isLoading: true
})
const filterQuantity = ref([3,6,10,'all'])
const selectedQuantity = ref(3)
/**
 * Get all jobs
 */
const getJobsData = async () => {
    try {
        const response = await API_GET_JOBS()
        state.jobs = response
    } catch (e) { console.error(e)
    } finally { state.isLoading = false }
}
onMounted(() => {
    getJobsData()
})

</script>