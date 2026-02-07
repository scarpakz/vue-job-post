<template>
    <div class="min-h-screen bg-gray-100 py-10 px-4">
        <div v-if="data" class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <!-- Header -->
            <div class="p-6 border-b">
                <span class="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {{ data.type }}
                </span>

                <h1 class="mt-4 text-3xl font-bold text-gray-900">
                    {{ data.title }}
                </h1>

                <div class="mt-2 flex flex-wrap gap-4 text-gray-600">
                    <span class="flex items-center gap-1">
                    <i class="pi pi-map-marker text-red-700"></i> {{ data.location }}
                    </span>
                    <span class="flex items-center gap-1">
                    {{ data.salary }}
                    </span>
                </div>
            </div>

            <div class="p-6 space-y-6">

                <div>
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">
                    Job Description
                    </h2>
                    <p class="text-gray-700 leading-relaxed">
                    {{ data.description }}
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">
                    Responsibilities
                    </h2>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li v-for="i in data.responsibilities" :key="i">
                            {{ i }}
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">
                    Requirements
                    </h2>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li v-for="i in data.requirements" :key="i">
                            {{ i }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="p-6 bg-gray-50 border-t flex flex-col sm:flex-row gap-3 justify-end">
                <button class="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                    Edit
                </button>
                <button class="px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-indigo-700 transition">
                    Delete
                </button>
            </div>
        </div>
        <div v-else class="max-w-4xl mx-auto overflow-hidden">
            <Loader>
                <span class="size-3 animate-ping rounded-full bg-indigo-600"></span>
                <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.2s]"></span>
                <span class="size-3 animate-ping rounded-full bg-indigo-600 [animation-delay:0.4s]"></span>
            </Loader>
        </div>
    </div>
    

</template>

<style></style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import joblists from '@/mockdata/joblists.json';
import Loader from '@/components/Loader.vue';

const jobs = ref(joblists);
const route = useRoute();
const paramsId = route.params.id;
const data = ref();

/**
 * Match data from the given params Id
 */
// TODO: Fetch through API
const onLoadJobDetail = () => {
    const arrData = jobs.value.filter(item => item.id === Number(paramsId))
    data.value = arrData[0]
}

onMounted(() => {
    onLoadJobDetail()
})

</script>