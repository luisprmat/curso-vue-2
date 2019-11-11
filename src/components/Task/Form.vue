<template>
    <div>
        <h2 class="subtitle">{{ title }}</h2>

        <form @submit.prevent="save">
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" v-model="draft.title" id="title">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea id="description" rows="6" v-model="draft.description" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">{{ action }}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['title', 'action', 'task'],
    data() {
        return {
            draft: clone(this.task)
        }
    },
    methods: {
        save() {
            this.$emit('save', this.draft)
        }
    }
}
</script>
