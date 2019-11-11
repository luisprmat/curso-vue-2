<template>
<div>
    <div>
        <h2>{{ action }}</h2>
    </div>
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">{{ action }}...</span>
        </div>
    </div>

</div>

</template>

<script>
export default {
    props: ['action']
}
</script>
