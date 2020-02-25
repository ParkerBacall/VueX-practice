
const state = {
    todos: [
    {
        id: 1,
        title: 'todo1'
    },
    {
        id: 2,
        title: 'todo2'
    }
    ]
}


const getters = {
    allTodos: (state) => state.todos
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}