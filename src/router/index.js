import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import JobDetailView from "@/views/JobDetailView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

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
      component: JobView,
    },
    {
      path: "/jobs/:id",
      name: "job-details",
      component: JobDetailView
    },
    {
      path: "/jobs/edit/:id",
      name: "job-edit",
      component: EditJobView
    },
    {
      path: "/add-job",
      name: "add-job",
      component: AddJobView
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView
    }
  ],
})

export default router
