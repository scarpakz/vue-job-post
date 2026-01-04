<template>
    <div class="task-main">
        <div class="task-content">
            <h1>Task Management</h1>
            <form @submit.prevent="addTask" class="task-form">
                <div class="input-group">
                    <input type="text" id="title" name="newTitle" v-model="newTask.title" placeholder="Title" required=""/>
                    <input type="text" id="description" name="newDescription" v-model="newTask.description" placeholder="Description"  required=""/>
                    <select name="newPriority" id="priority" required="">
                        <option disabled selected>Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit" class="primary-button">Add</button>
            </form>
            <div class="task-list">
                <ul>
                    <li v-for="task in tasks" :key="task">
                        <p class="font-regular">{{ task.title }}</p>
                        <p class="font-small">{{ task.description }}</p>
                        <button class="btn-danger" @click="deleteTask(task.id)">X</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.btn-danger {
    color: #f10a19;
    border: unset;
    background-color: unset;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
.task-main {
    display: flex;
    align-items: center;
    justify-content: center;
    height:100vh;
}
.task-form {
    margin-top: 50px;
}
ul {
    list-style: none;
}
input {
    width: -webkit-fill-available;
    padding: 10px 5px;
    font-size: 14px;
    margin-bottom: 10px;
}
.task-list li {
    box-shadow: 2px 2px 4px #c7c7c7;
    border-left: solid 3px #0af119;
    padding: 15px;
    margin: 10px 0;
    position: relative;
}
.font-regular {
    font-size: 18px;
}
.font-small {
    font-size: 12px;
    color:#8f8f8f;
}
select {
    width: 100%;
    padding: 10px 5px;
    font-size: 14px;
    margin-bottom: 10px;
}
</style>

<script setup>
import { ref } from 'vue'

const newTask = ref({
    id: "",
    title: "",
    description: "",
    status: "active",
    priority: "",
    due_date: ""
});

const tasks = ref([
    {
        id: 1,
        title: "Buy groceries",
        description: "Milk, eggs, bread, and fruits",
        status: "pending",
        priority: "medium",
        due_date: "2026-01-05"
    },
    {
        id: 2,
        title: "Finish report",
        description: "Complete the monthly sales report",
        status: "in_progress",
        priority: "high",
        due_date: "2026-01-03"
    },
    {
        id: 3,
        title: "Workout",
        description: "30-minute cardio session",
        status: "completed",
        priority: "low",
        due_date: "2026-01-02"
    }
]);


const addTask = () => {
    if (newTask.value.title.trim() !== '') {
        tasks.value.push(newTask.value)
        newTask.value = {
            title: "",
            description: "",
            status: "active",
            priority: "",
            due_date: ""
        }
    }
}

const deleteTask = (id) => {
    const updatedTask = tasks.value.filter(task => task.id !== id)
    tasks.value = updatedTask
}

</script>