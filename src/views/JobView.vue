<template>
    <Hero 
    :title=title
    :description=description
    :showButtons=showButtons
    :backgroundImage="heroSecond"
    />
    <Jobs />
</template>
<style>
</style>
<script setup>
import Hero from '@/components/Hero.vue'
import Jobs from '@/components/joblists/Jobs.vue'
import {reactive, toRefs} from 'vue'
import heroSecond from '@/assets/images/hero-second.png'

const hero = reactive({
    title: "Find Your Next Opportunity",
    description: "Browse thousands of job listings from top companies. Discover roles that match your skills and take the next step in your career.",
    showButtons: false,
    backgroundImage: heroSecond
})
const {
    title,
    description,
    showButtons,
    backgroundImage
} = toRefs(hero)
</script>