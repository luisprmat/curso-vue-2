<template>
    <div>
        <h2 class="subtitle">Nueva Tarea</h2>

        <form @submit.prevent="create">
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" v-model="task.title" id="title">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea id="description" rows="6" v-model="task.description" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Crear tarea</button>
        </form>
    </div>
</template>

<script>
import store from 'store'

export default {
    data() {
        return {
            task: {
                id: '',
                title: '',
                description: '',
                pending: true
            }
        }
    },
    methods: {
        create() {
            store.createTask(this.task);

            this.$router.push({
                name: 'tasks.details',
                params: {id: this.task.id}
            });
        },
    }
}
</script>
