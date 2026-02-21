<template>
  <nav class="relative bg-indigo-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">

        <!-- Logo -->
        <div class="flex items-center">
          <img :src="navbarbg" alt="Your Company" class="h-8 w-auto" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden sm:flex space-x-4">
          <RouterLink :to="{ name: 'home' }"
            :class="[isActiveLink('/') ? 
            'bg-white text-indigo-800' : 'text-white hover:bg-white hover:text-indigo-800',
            'rounded-md px-3 py-2 text-sm font-medium']"
          >Home</RouterLink>

          <RouterLink :to="{ name: 'jobs' }"
            :class="[isActiveLink('/jobs') ? 
            'bg-white text-indigo-800' : 'text-white hover:bg-white hover:text-indigo-800',
            'rounded-md px-3 py-2 text-sm font-medium']"
          >Jobs</RouterLink>

          <RouterLink :to="{ name: 'add-job' }"
            :class="[isActiveLink('/add-job') ? 
            'bg-white text-indigo-800' : 'text-white hover:bg-white hover:text-indigo-800',
            'rounded-md px-3 py-2 text-sm font-medium']"
          >Add Job</RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="sm:hidden">
          <button
            @click="mobileOpen = !mobileOpen"
            class="text-white p-2 rounded-md hover:bg-white hover:text-indigo-800 cursor-pointer"
            aria-controls="mobile-menu"
            :aria-expanded="mobileOpen"
          >
            ☰
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileOpen" id="mobile-menu" class="sm:hidden px-2 pb-3 space-y-1">
      <RouterLink
        @click="mobileOpen = false"
        :to="{ name: 'home' }"
        class="block text-white hover:bg-white hover:text-indigo-800 rounded-md px-3 py-2 text-base font-medium"
      >Home</RouterLink>

      <RouterLink
        @click="mobileOpen = false"
        :to="{ name: 'jobs' }"
        class="block text-white hover:bg-white hover:text-indigo-800 rounded-md px-3 py-2 text-base font-medium"
      >Jobs</RouterLink>

      <RouterLink
        @click="mobileOpen = false"
        :to="{ name: 'add-job' }"
        class="block text-white hover:bg-white hover:text-indigo-800 rounded-md px-3 py-2 text-base font-medium"
      >Add Job</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import navbarbg from '@/assets/images/3d-briefcase.png';
import { RouterLink, useRoute } from 'vue-router';
import {ref} from 'vue'

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}

const mobileOpen = ref(false)
</script>
