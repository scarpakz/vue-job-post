<template>
    <div :class="`rounded-lg ${bg} px-4 py-4 lg:block md:block grid justify-center items-center`">
        <slot></slot>
    </div>
</template>
<script setup>
defineProps({
    bg: {
        type: String,
        default: 'bg-indigo-200'
    }
})
</script>