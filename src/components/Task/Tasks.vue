<template>
    <div>
        <task-list :tasks="tasks"></task-list>

        <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">Eliminar tareas completadas</a></p>

        <task-form @created="createTask"></task-form>
    </div>
</template>

<script>
import TaskList from './List.vue'
import TaskForm from './CreateForm.vue'

export default {
    components: {
        'task-list': TaskList,
        'task-form' : TaskForm
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
