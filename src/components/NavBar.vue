<template>
    <nav class="relative bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex-shrink-0 flex items-center">
            <img :src="navbarbg" alt="Your Company" class="h-8 w-auto" />
          </div>
          <!-- Navigation links -->
          <div class="hidden sm:flex space-x-4">
            <a href="#" aria-current="page" class="px-3 py-2 text-sm font-medium text-indigo-800">Home</a>
            <a href="#" class="px-3 py-2 text-sm font-medium text-black hover:text-indigo-800">Jobs</a>
            <a href="#" class="px-3 py-2 text-sm font-medium text-black hover:text-indigo-800">Add Job</a>
          </div>
        </div>
      </div>
    </nav>
</template>
  

<script setup>
import navbarbg from '@/images/navbar-bg.png'

</script>