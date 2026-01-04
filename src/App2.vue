<template>
    <div>
        <p>{{ message }}</p>
        status: {{ status }}
        <button @click="toggleStatus">Toggle Status</button>
        <ul>
            <li v-for="task in tasks" :key="task">{{ task }}</li>
        </ul>
    </div>
</template>

<style>

</style>

<script setup>
import { ref } from 'vue'

const message = ref('Hello World');
const status = ref('active');
const tasks = ref(['one', 'two', 'three']);

const toggleStatus = () => {
    status.value === 'active' ? status.value = 'inactive' : status.value = 'active';
}

</script>