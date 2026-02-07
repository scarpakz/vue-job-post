<template>
    <Hero 
    :title=title
    :description=description
    :showButtons=showButtons
    :backgroundImage=heroImage
    />
    <CardFinder />
    <Jobs :showButton="true" />
    <Testimony />
</template>

<style>

</style>
<script setup>
import Hero from "@/components/Hero.vue";
import CardFinder from "@/components/CardFinder.vue";
import Jobs from "@/components/joblists/Jobs.vue";
import Testimony from "@/components/Testimony.vue";
import {reactive, toRefs} from 'vue'
import heroImage from '@/assets/images/hero-image.png'

const hero = reactive({
    title: "Looking for a Developer Job?",
    description: "Find the skills you need.",
    showButtons: true,
    backgroundImage: heroImage
})
const {
    title,
    description,
    showButtons,
    backgroundImage
} = toRefs(hero)

</script>
