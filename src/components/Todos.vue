<template>
    <div>
        <h3>Todos</h3>
        <div v-for="todo in allTodos" :key="todo.id" class="todos">
            {{todo.title}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Todos",
    computed: mapGetters(['allTodos'])
}
</script>

<style lang="css">
    
</style>