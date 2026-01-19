<template>
    <Hero title="Looking for a Developer Job?" description="Find the skills you need"/>
    <CardFinder />
    <Jobs :limit="3" :showButton="true" />
</template>

<style>

</style>
<script setup>
import Hero from "@/components/Hero.vue";
import CardFinder from "@/components/CardFinder.vue";
import Jobs from "@/components/joblists/Jobs.vue";
</script>
