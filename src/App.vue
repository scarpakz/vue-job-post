<template>
  <div class="heading-group">
    <h1 class="heading-title">{{ message }}</h1>
    <p v-if="status==='active'">User is active</p>
    <p v-else>User is Inactive</p>

    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <a v-bind:href="link">Google</a>
    <button @click="toggleStatus">Toggle Status</button>
  </div>
</template>

<style scoped>
.heading-group {
  color: #07b80f;
  font-size: 24px;
}
</style>

<script>
  export default {
    data () {
      return {
        message: "Test",
        status: 'active',
        tasks: ["One", "Two","three"],
        link:"https://www.google.com"
      }
    },
    methods: {
      toggleStatus() {
        this.status==='active' ? this.status = 'inactive' : this.status = 'active'
      }
    }
  }
</script>
