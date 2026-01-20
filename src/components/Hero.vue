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