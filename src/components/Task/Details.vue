<template>
    <div>
        <h3>{{ task.title }}</h3>

        <p>{{ task.description }}</p>
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
        id: 'findTask'
    },
    methods: {
        findTask() {
            this.task = store.findTask(this.id);
        }
    }
}
</script>
