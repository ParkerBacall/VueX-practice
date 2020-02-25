<template>
    <div>
        <h3>addtodo</h3>
        <div class="add">
            <form @submit="handleSubmit">
                <input v-model="todo.title" type="text" placeholder="title">
                <input v-model="todo.text" type="text" placeholder="text">
                <input type="submit">
            </form>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: "AddTodo",
    data(){
        return{
        todo:{
            title: '',
            text: ''
        }
        }
    },
    methods: {
         ...mapActions(['postTodo']),
         handleSubmit(e){
             e.preventDefault();
             this.postTodo(this.todo)
         }
    }
}
</script>

