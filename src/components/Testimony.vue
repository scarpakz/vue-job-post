<template>
    <section class="bg-gray-100 py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-10">
            What People Say
            </h2>
            <div class="relative overflow-hidden bg-white rounded-2xl shadow-lg p-8">
                <transition name="fade" mode="out-in">
                    <div :key="currentIndex">
                        <p class="text-gray-700 text-lg italic mb-6">
                            “{{ currentTestimonial.message }}”
                        </p>

                        <div class="flex items-center justify-center gap-4">
                            <img
                            :src="currentTestimonial.avatar"
                            class="w-12 h-12 rounded-full object-cover"
                            alt="avatar"
                            />
                            <div class="text-left">
                                <p class="font-semibold text-gray-900">
                                    {{ currentTestimonial.name }}
                                </p>
                                <p class="text-sm text-gray-500">
                                    {{ currentTestimonial.role }}
                                </p>
                            </div>
                        </div>
                    </div>
                </transition>
                <div class="flex justify-center mt-6 gap-2">
                    <span
                    v-for="(t, index) in testimonials"
                    :key="index"
                    class="w-2.5 h-2.5 rounded-full cursor-pointer"
                    :class="currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'"
                    @click="currentIndex = index"
                    ></span>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const testimonials = ref([
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    message: "This platform helped me land my dream job. The UI is clean and easy to navigate.",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Michael Lee",
    role: "Backend Engineer",
    message: "The job listings are well-structured and detailed. I found relevant roles quickly.",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "Jessica Brown",
    role: "UI/UX Designer",
    message: "I love the overall design and experience. Everything feels modern and intuitive.",
    avatar: "https://i.pravatar.cc/100?img=3"
  },
  {
    name: "David Kim",
    role: "Full Stack Developer",
    message: "The job detail pages are very informative and helped me prepare for interviews.",
    avatar: "https://i.pravatar.cc/100?img=4"
  },
  {
    name: "Emily Carter",
    role: "Product Manager",
    message: "This site made my job search much easier. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=5"
  }
]);

const currentIndex = ref(0)
let interval = null

const currentTestimonial = computed(() => {
  if (!testimonials.value.length) return null
  return testimonials.value[currentIndex.value % testimonials.value.length]
})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

onMounted(() => {
    interval = setInterval(nextSlide, 4000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>