<template>
    <div id="app" class="container">
        <h1>Curso de Vue.js</h1>

        <router-link to="/">Dashboard</router-link>
        <router-link to="/tasks">Tareas</router-link>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!-- <pre class="code pre-scrollable">{{ $data }}</pre> -->

        <footer class="footer">
            <p>&copy; 2019. {{ name }}. Derechos reservados</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Luis Parrado',
        }
    },
}
</script>

<style lang="scss">
    @import 'src/sass/app';

    body {
        margin: 10px;
    }

    .container {
        max-width: 670px;

        h2 {
            margin-bottom: 20px;
        }
        footer {
            margin: 40px 0;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            color: lightslategrey;
        }
    }

    .code {
        background-color: lightgray;
    }


</style>
