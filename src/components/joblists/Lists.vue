<template>
    <!-- Job Card -->
    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
        <span class="text-sm font-semibold text-indigo-600 mb-2">{{ job.type }}</span>
        <h3 class="text-xl font-bold mb-2">{{ job.title }}</h3>
        <p class="text-gray-600 mb-2">{{ job.description }}</p>
        <p class="text-gray-500 mb-4">📍 {{ job.location }}</p>
        <p class="font-semibold text-gray-800 mb-4">{{ job.salary }}</p>
        <button class="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
        Read More
        </button>
    </div>
</template>
<script setup>

const props = defineProps({
    job: { type: Object }
})
</script>