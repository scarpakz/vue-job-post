<template>
    <RouterLink
        :to="{ name: 'jobs' }"
        class="group inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
        >
        <i class="pi pi-arrow-left transform transition-transform duration-200 group-hover:-translate-x-1"></i>
        Back to job listings
    </RouterLink>
</template>
<script setup>
import {RouterLink} from 'vue-router'
</script>