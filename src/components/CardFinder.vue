<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        
        <HomeCardFinder bg="bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out shadow-md hover:shadow-xl rounded-xl p-8">
          <h2 class="text-black font-extrabold text-3xl md:text-4xl text-center md:text-left mb-3">
            For Developers
          </h2>
          <p class="text-black/80 mb-6 text-center md:text-left text-lg">
            Explore jobs built for developers
          </p>
          <RouterLink 
            :to="{ name: 'jobs' }" 
            class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg text-center w-full md:w-auto"
          >
            Browse Jobs
          </RouterLink>
        </HomeCardFinder>
  
        <HomeCardFinder bg="bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-md hover:shadow-xl rounded-xl p-8">
          <h2 class="text-black font-extrabold text-3xl md:text-4xl text-center md:text-left mb-3">
            For Employers
          </h2>
          <p class="text-black/80 mb-6 text-center md:text-left text-lg">
            Post jobs and connect with developers that match your needs
          </p>
          <button 
            class="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg text-center w-full md:w-auto"
            type="button"
          >
            Add Job
          </button>
        </HomeCardFinder>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import HomeCardFinder from '@/components/HomeCardFinder.vue'
  import { RouterLink } from 'vue-router'
  </script>
  