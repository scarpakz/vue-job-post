import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import JobDetailView from "@/views/JobDetailView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobView
    },
    {
      path: "/jobs/:id",
      name: "job-details",
      component: JobDetailView
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView
    }
  ],
})

export default router
