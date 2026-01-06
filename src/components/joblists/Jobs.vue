<template>
    <div class="mx-auto mt-16">
        <section class="py-16 bg-gray-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Available Jobs</h2>
        
                <!-- Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Lists 
                    v-for="job in jobs"
                    :job="job"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import {ref} from 'vue'
import Lists from '@/components/joblists/Lists.vue'

const jobs = ref(
    [
        {
            type: "Full Time",
            title: "Frontend Developer",
            description: "Build and maintain user interfaces for our web apps using Vue.js and Tailwind CSS.",
            location: "New York, NY",
            salary: "$60,000 - $80,000/year"
        },
        {
            type: "Full Time",
            title: "Backend Developer",
            description: "Design and implement scalable APIs and manage databases with Node.js and PostgreSQL.",
            location: "San Francisco, CA",
            salary: "$65,000 - $90,000/year"
        },
        {
            type: "Full Time",
            title: "Full Stack Developer",
            description: "Work across front and backend to deliver complete web solutions for clients.",
            location: "Austin, TX",
            salary: "$70,000 - $95,000/year"
        },
        {
            type: "Full Time",
            title: "Mobile Developer",
            description: "Create cross-platform mobile apps using Flutter or React Native.",
            location: "Seattle, WA",
            salary: "$60,000 - $85,000/year"
        },
        {
            type: "Full Time",
            title: "DevOps Engineer",
            description: "Manage cloud infrastructure, CI/CD pipelines, and deployment workflows.",
            location: "Boston, MA",
            salary: "$75,000 - $100,000/year"
        },
        {
            type: "Full Time",
            title: "UI/UX Designer",
            description: "Design intuitive interfaces and improve user experience for web and mobile apps.",
            location: "Los Angeles, CA",
            salary: "$55,000 - $75,000/year"
        }
    ]

)

</script>