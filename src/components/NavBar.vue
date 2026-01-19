<template>
    <nav class="relative bg-indigo-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex-shrink-0 flex items-center">
            <img :src="navbarbg" alt="Your Company" class="h-8 w-auto" />
          </div>
          <!-- Navigation links -->
          <div class="hidden sm:flex space-x-4">
            <RouterLink :to="{ name: 'home' }"  aria-current="page" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-white text-white hover:text-indigo-800">Home</RouterLink>
            <RouterLink :to="{ name: 'jobs' }" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-indigo-800">Jobs</RouterLink>
            <RouterLink :to="{ name: 'home' }" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-indigo-800">Add Job</RouterLink>
          </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
import navbarbg from '@/images/3d-briefcase.png';
import { RouterLink } from 'vue-router';

</script>