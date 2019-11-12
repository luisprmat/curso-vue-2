<template>
    <div v-if="task">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{ task.title }}</h3>
                <p class="card-text">{{ task.description }}</p>
            </div>
            <div class="card-footer">
                <button @click="toggleTask" type="button" class="btn" :class="task.pending ? 'btn-outline-dark' : 'btn-primary'">
                    <app-icon img="ok"></app-icon> Completar
                </button>
                <button @click="editTask" type="button" class="btn btn-outline-dark">
                    <app-icon img="edit"></app-icon> Editar
                </button>
                <button @click="deleteTask" type="button" class="btn btn-outline-dark">
                    <app-icon img="trash"></app-icon> Eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import store from 'store'
import Icon from 'components/Icon.vue'

export default {
    props: ['id'],
    computed: {
        task() {
            return store.getters.findTask(this.id)
        }
    },
    components: {
        'app-icon': Icon
    },
    methods: {
        toggleTask() {
            store.dispatch('toggleTask', this.task);
        },
        editTask() {
            this.$router.push({
                name: 'tasks.edit',
                params: {id: this.id}
            });
        },
        deleteTask() {
            store.dispatch('deleteTask', this.id);

            this.$router.replace({ name: 'tasks' });
        }
    }
}
</script>
