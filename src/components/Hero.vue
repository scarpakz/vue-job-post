<template>
  <section :class="[props.showButtons ? 'md:min-h-[70vh]' : 'md:min-h-[50vh]', ' min-h-[40vh] relative flex items-center overflow-hidden text-white']">
  
    <div 
      class="absolute inset-0 bg-[url('/images/hero-image.png')] bg-cover bg-center transition-transform duration-700 hover:scale-105"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      aria-hidden="true"
    ></div>

    <div class="absolute inset-0 bg-indigo-950/60"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="mx-auto max-w-5xl text-center">
        
        <div class="backdrop-blur-[2px] bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight [text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]">
            <span class="block">{{ props.title }}</span>
            <span class="block text-indigo-400 mt-2">Built for Developers.</span>
          </h1>

          <p class="mt-6 text-lg sm:text-xl text-indigo-100/90 leading-relaxed max-w-2xl mx-auto font-medium">
            {{ props.description }}
          </p>

          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center" v-if="props.showButtons">
            <button class="cursor-pointer px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/25">
              Browse Jobs
            </button>
            <button class="cursor-pointer px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 transition-all">
              Post a Role
            </button>
          </div>

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
  description: { type: String, default: "Find the skills you need" },
  showButtons: { type: Boolean, default: false },
  backgroundImage: { default: null }
})
</script>