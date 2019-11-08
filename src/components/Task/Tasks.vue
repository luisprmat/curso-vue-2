<template>
    <div>
        <app-task-list :tasks="tasks"></app-task-list>

        <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">Eliminar tareas completadas</a></p>

        <app-task-form @created="createTask"></app-task-form>
    </div>
</template>

<script>
import TaskList from './List.vue'
import TaskForm from './CreateForm.vue'

export default {
    components: {
        'app-task-list': TaskList,
        'app-task-form' : TaskForm
    },
    created() {
        this.tasks.forEach((task, index) => {
            this.$set(task, 'id', index + 1)
        });
    },
    data() {
        return {
            new_task: '',
            tasks: [
                {
                    description: 'Aprender Vue.js 2',
                    pending: true,
                },
                {
                    description: 'Suscribirse en Styde',
                    pending: true,
                },
                {
                    description: 'Grabar lección de Vue',
                    pending: false,
                },
                {
                    description: 'Aprender CSS modules',
                    pending: false
                }
            ],
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
