let tasks = [
    {
        title: 'Aprender Vue.js 2',
        description: 'Vue (pronunciado / vjuː /, como view ) es un marco progresivo para construir interfaces de usuario. A diferencia de otros marcos monolíticos, Vue está diseñado desde cero para ser gradualmente adoptable. La biblioteca principal se centra solo en la capa de vista y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes. ',
        pending: true,
    },
    {
        title: 'Suscribirse en Styde',
        description: 'Aprende PHP, Laravel, TDD, Vue.js, Docker, Sass y mucho más con nuestros cursos en español, de cero a nivel avanzado.',
        pending: true,
    },
    {
        title: 'Fijar entorno de desarrollo',
        description: 'Instalar los principales componentes para desarrollar aplicaciones web',
        pending: false,
    },
    {
        title: 'Aprender CSS modules',
        description: 'Es una forma de envolver los estilos CSS para distintas páginas',
        pending: false
    }
];

tasks.forEach((task, index) => {
    task.id = index + 1
});


export default {
    state: {
        tasks
    },
    findTask(id) {
        return this.state.tasks.find(task => task.id == id)
    },
    createTask(task) {
        task.id = this.state.tasks.length + 1;

        task.pending = true;

        this.state.tasks.push(task);
    },
    toggleTask(task) {
        task.pending = !task.pending;
    },
    deleteTask(id) {
        let index = this.state.tasks.findIndex(task => task.id == id);

        this.state.tasks.splice(index, 1);
    }
}
