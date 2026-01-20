<template>
    <Hero title="Looking for a Developer Job?" description="Find the skills you need"/>
    <CardFinder />
    <Jobs :limit="6" :showButton="true" />
    <Testimony />
</template>

<style>

</style>
<script setup>
import Hero from "@/components/Hero.vue";
import CardFinder from "@/components/CardFinder.vue";
import Jobs from "@/components/joblists/Jobs.vue";
import Testimony from "@/components/Testimony.vue";
</script>
