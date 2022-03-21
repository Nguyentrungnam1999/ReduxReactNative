const initState = {
  todoList: [
    { id: 1, name: 'Learn Redux' },
    { id: 2, name: 'Learn Java' },
    { id: 3, name: 'Learn React' },
  ],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todoList: [...state.todoList],
      }
    default:
      state
  }
}

export default rootReducer
