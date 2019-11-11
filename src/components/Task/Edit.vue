<template>
    <div v-if="task">
        <h2 class="subtitle">Editar tarea</h2>

        <form @submit.prevent="update">
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" v-model="task.title" id="title">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea id="description" rows="6" v-model="task.description" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar tarea</button>
            <router-link :to="{ name: 'tasks.details', params: {id: this.id}}" class="btn btn-secondary">Cancelar</router-link>
        </form>
    </div>

</template>

<script>
import store from 'store'

export default {
    props: ['id'],
    data() {
        return {
            task: null
        }
    },
    created() {
        this.findTask();
    },
    watch: {
        'id': 'findTask'
    },
    methods: {
        findTask() {
            this.task = clone(store.findTask(this.id));

            not_found_unless(this.task);
        },
        update() {
            store.updateTask(this.id, this.task);

            this.$router.push({
                name: 'tasks.details',
                params: {id: this.id}
            });
        }
    }
}
</script>
