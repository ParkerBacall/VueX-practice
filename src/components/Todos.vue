<template>
    <div>
        <h3>Todos</h3>
        <div v-for="todo in allTodos" :key="todo.id" class="todos">
            {{todo.title}}
            {{todo.text}}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Todos",
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo']),
    },
    computed: mapGetters(['allTodos']),
    mounted() {
        this.fetchTodos()
    }
}
</script>

<style lang="css">
    
</style>