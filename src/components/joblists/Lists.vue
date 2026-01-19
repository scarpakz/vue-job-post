<template>
    <!-- Job Card -->
    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
        <span class="text-sm font-semibold text-indigo-600 mb-2">{{ job.type }}</span>
        <h3 class="text-xl font-bold mb-2">{{ job.title }}</h3>
        <p class="text-gray-600 mb-2">{{ showFullDescription ? job.description : truncatedDescription }}</p>
        <a @click="toggleDescription" class="cursor-pointer text-blue-400 mb-4 hover:text-blue-500">{{ showFullDescription ? 'Read Less' : 'Read More..' }}</a>
        <p class="text-gray-500 mb-4">📍 {{ job.location }}</p>
        <p class="font-semibold text-gray-800 mb-4">{{ job.salary }}</p>
        <!-- <button 
        @click="goToJobDetails(job.id)"
        class="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer">
        Read More
        </button> -->
        <button 
        class="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer">
        View Job
        </button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import {ref, computed } from 'vue';

const props = defineProps({
    job: { type: Object }
})

const router = useRouter();

const goToJobDetails = (id, slug) => {
    router.push(`/jobs/${id}`)
}

const showFullDescription = ref(false);

const truncatedDescription = computed(() => {
    let description = props.job.description;
    if (!showFullDescription.value) {
        description = description.substring(0, 90) + '...';
    }
    return description
});

const toggleDescription = () => {
    showFullDescription.value? showFullDescription.value = false : showFullDescription.value = true
}
</script>