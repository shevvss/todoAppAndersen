import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const response = await fetch(
      'https://62bf3495be8ba3a10d65ed0b.mockapi.io/todos'
    );
    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);

// export const deleteTodo  = id => dispatch => {
// fetch(`https://62bf3495be8ba3a10d65ed0b.mockapi.io/todos/${payload.id}`, {
//   method: "DELETE"
// })
//   .then(res => res.json())
//   .then(),
//   );
// };

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    toggleFavourite: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].favourite = action.payload.favourite;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
    },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      console.log('fetching data');
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log('fetching data successfully');
      return action.payload.todos;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  toggleFavourite,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
