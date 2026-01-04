<template>
    <div class="task-main">
        <div class="task-content">
            <h1>Task Management</h1>
            <form @submit.prevent="addTask" class="task-form">
                <div class="input-group">
                    <input type="text" id="title" name="newTitle" v-model="newTask.title" placeholder="Title" required=""/>
                    <input type="text" id="description" name="newDescription" v-model="newTask.description" placeholder="Description"  required=""/>
                </div>
                <button type="submit" class="primary-button">Add</button>
            </form>
            <div class="task-list">
                <ul>
                    <li v-for="task in tasks" :key="task">
                        <p class="font-regular">{{ task.title }}</p>
                        <p class="font-small">{{ task.userId }}</p>
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
import { ref, onMounted } from 'vue'

const newTask = ref({
    title: "",
    completed: "",
    userId: "",
    id: ""
});

const tasks = ref([]);


const addTask = () => {
    if (newTask.value.title.trim() !== '') {
        tasks.value.push(newTask.value)
        newTask.value = {
            title: "",
            completed: "",
            userId: "",
            id: ""
        }
    }
}

const deleteTask = (id) => {
    const updatedTask = tasks.value.filter(task => task.id !== id)
    tasks.value = updatedTask
}

// Lifecycle
onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        tasks.value = data
    } catch (error) {
        console.error(error)
    }
})

</script>