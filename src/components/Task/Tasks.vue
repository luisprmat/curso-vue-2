<template>
    <div>
        <task-list :tasks="tasks"></task-list>

        <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">Eliminar tareas completadas</a></p>

        <task-form @created="createTask"></task-form>
    </div>
</template>

<script>
import store from 'store'
import TaskList from './List.vue'
import TaskForm from './CreateForm.vue'

export default {
    components: {
        'task-list': TaskList,
        'task-form' : TaskForm
    },
    data() {
        return {
            new_task: '',
            tasks: store.state.tasks
        }
    },
    methods: {
        createTask(task) {
            this.tasks.push(task);
        },
        deleteCompleted() {
            this.tasks = this.tasks.filter(task => task.pending)
        }
    }
}
</script>
