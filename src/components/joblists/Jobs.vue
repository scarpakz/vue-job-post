<template>
    <div class="mx-auto mt-16">
        <section class="py-16 bg-gray-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Available Jobs</h2>
        
                <!-- Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Lists 
                    v-for="job in jobs.slice(0, limit || jobs.length)"
                    :job="job"
                    :key="job.id"
                    />
                </div>
            </div>
            <div class="flex justify-center mt-8"
            v-if="showButton"
            >
                <button
                    type="button"
                    class="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition cursor-pointer"
                >
                    View All Jobs
                </button>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import {ref} from 'vue'
import Lists from '@/components/joblists/Lists.vue'

defineProps({
    limit: { 
        default: 6
    },
    showButton: {
        type: Boolean,
        default: false
    }
})
const jobs = ref(
    [
        {
            id: 1,
            type: "Full Time",
            title: "Frontend Developer",
            description: "Build, maintain, and optimize modern user interfaces for our web applications using Vue.js and Tailwind CSS. You will collaborate closely with designers and backend developers to translate UI/UX designs into clean, responsive, and accessible components while ensuring cross-browser compatibility and high performance.",
            location: "New York, NY",
            salary: "$60,000 - $80,000/year"
        },
        {
            id: 2,
            type: "Full Time",
            title: "Backend Developer",
            description: "Design, develop, and maintain scalable backend services and RESTful APIs using Node.js. You will manage and optimize PostgreSQL databases, implement authentication and security best practices, and ensure high availability and performance of server-side systems.",
            location: "San Francisco, CA",
            salary: "$65,000 - $90,000/year"
        },
        {
            id: 3,
            type: "Full Time",
            title: "Full Stack Developer",
            description: "Work across both frontend and backend technologies to deliver complete, end-to-end web solutions. You will build responsive user interfaces, develop robust APIs, integrate third-party services, and collaborate with cross-functional teams to turn business requirements into high-quality applications.",
            location: "Austin, TX",
            salary: "$70,000 - $95,000/year"
        },
        {
            id: 4,
            type: "Full Time",
            title: "Mobile Developer",
            description: "Create and maintain cross-platform mobile applications using Flutter or React Native. You will be responsible for implementing features, optimizing app performance, integrating APIs, and ensuring a smooth and consistent user experience across both iOS and Android devices.",
            location: "Seattle, WA",
            salary: "$60,000 - $85,000/year"
        },
        {
            id: 5,
            type: "Full Time",
            title: "DevOps Engineer",
            description: "Manage and improve cloud infrastructure, automate deployment processes, and maintain CI/CD pipelines. You will monitor system performance, ensure reliability and scalability, implement security best practices, and collaborate with development teams to streamline release workflows.",
            location: "Boston, MA",
            salary: "$75,000 - $100,000/year"
        },
        {
            id: 6,
            type: "Full Time",
            title: "UI/UX Designer",
            description: "Design intuitive and visually appealing interfaces for web and mobile applications. You will conduct user research, create wireframes and prototypes, collaborate with developers, and continuously refine designs based on user feedback and usability testing.",
            location: "Los Angeles, CA",
            salary: "$55,000 - $75,000/year"
        }

    ]
)

</script>