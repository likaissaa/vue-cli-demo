export const count = state => state.count;
export const doneTodos = state =>state.todos.filter(todo => todo.done);
export const doneTodosCount = (state,getters) => getters.doneTodos.length
