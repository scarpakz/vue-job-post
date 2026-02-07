<template>
    <footer class="relative bg-gray-900 text-gray-200 pt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:text-left lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 class="text-2xl font-bold mb-4">Jason Javier</h2>
                    <p class="text-gray-400">Turning ideas into reality, one project at a time. Reach out, explore, and grow with us.</p>
                    <div class="flex mt-4 space-x-4">
                        <a target="_blank" href="https://github.com/scarpakz" class="text-gray-400 hover:text-white transition text-2xl">
                            <i class="pi pi-github"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/jason-javier-2365a1130/" class="text-gray-400 hover:text-white transition text-2xl">
                            <i class="pi pi-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                    <li>
                        <RouterLink :to="{ name: 'home' }"  aria-current="page" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-white text-white hover:text-indigo-800">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'jobs' }" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-indigo-800">Jobs</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'home' }" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-indigo-800">Add Job</RouterLink>
                    </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact</h3>
                    <p class="text-gray-400">123 Street Name, City, Country</p>
                    <p class="text-gray-400 mt-2">Email: jasonjjavier@gmail.com</p>
                    <p class="text-gray-400 mt-2">Phone: +1 234 567 890</p>
                </div>

            </div>

            <div class="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
            &copy; 2026 Jason Javier. All rights reserved.
            </div>
        </div>
    </footer>

</template>
<style>

</style>

<script setup>

</script>