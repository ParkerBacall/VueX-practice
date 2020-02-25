
const state = {
    todos: []
}


const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    fetchTodos({ commit }){
        fetch('http://localhost:8001/todos')
        .then(res => res.json())
        .then(todos => commit('setTodos', todos))
    },
    postTodo({commit}, todo){
        fetch('http://localhost:8001/todos',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({title: todo.title, text:todo.text})
        })
        .then(res => res.json())
        .then(todo => commit('newTodo', todo[0]))
    },
    deleteTodo({commit}, id){
        fetch(`http://localhost:8001/todos/${id}`,{
            method: 'DELETE',
            
    })
    .then(commit('removeTodo', id))
},
    filterTodos({commit}, event){
        const limit = parseInt(
            event.target.options[event.target.options.selectedIndex].innertext
            )
            fetch(`http://localhost:8001/todos?_limit=${limit}`)
            .then(response => commit('setTodos', response))
    }

}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id  !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}