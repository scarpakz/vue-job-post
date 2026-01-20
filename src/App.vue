<template>
    <div>
        <NavBar />
        <RouterView />
        <!-- TODO: Add Footer -->
    </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";

</script>