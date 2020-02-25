<template>
  <div id="app">
    <div>
      <AddTodo/>
      <FilterTodos/>
       <Todos/>
    </div>
  </div>
</template>

<script>

import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import FilterTodos from "./components/FilterTodos"

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>

</style>
