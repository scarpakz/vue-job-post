<template>
  <section class="bg-indigo-800 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-20 text-center lg:text-center">
        <!-- Hero Text -->
        <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">
          {{ props.title }}
        </h1>
        <p class="mt-4 text-lg sm:text-xl lg:text-2xl text-white/80">
          {{ props.description }}
        </p>

        <!-- Optional Button -->
        <div class="mt-8 flex justify-center lg:justify-center space-x-4">
          <a href="#"
             class="rounded-md bg-white text-indigo-700 px-6 py-3 font-medium hover:bg-white/90 transition">
            Get Started
          </a>
          <a href="#"
             class="rounded-md border border-white px-6 py-3 font-medium hover:bg-white/10 transition">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style>

</style>
<script setup>

const props = defineProps({
  title: { type: String, default: "Looking for a Job?" },
  description: { type: String, default: "Find the skills you need" }
})
</script>