<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <HomeCardFinder bg="bg-gray-100">
                <h2 class="text-black font-bold text-3xl text-center md:text-left lg:text-3xl">For Developers</h2>
                <p class="text-black/80 mb-5 text-center md:text-left">Explore jobs built for developers</p>
                <button class="text-white bg-indigo-600 px-4 py-3 rounded-md cursor-pointer" type="button">Browse Jobs</button>
            </HomeCardFinder>
            <HomeCardFinder>
                <h2 class="text-black font-bold text-3xl text-center md:text-left lg:text-3xl">For Employers</h2>
                <p class="text-black/80 mb-5 text-center md:text-left">Post jobs and connect with developers that match your needs</p>
                <button class="text-white bg-black px-4 py-3 rounded-md cursor-pointer" type="button">Add Job</button>
            </HomeCardFinder>
        </div>
    </div>
</template>
<script setup>
import HomeCardFinder from '@/components/HomeCardFinder.vue'
</script>