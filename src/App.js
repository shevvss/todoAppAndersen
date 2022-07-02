import React from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import TotalCompleteItems from './components/TotalCompletetems/TotalCompletelItems';
import store from './redux/store';
import { Provider } from 'react-redux';
import styles from './StylesApp.module.css';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <h1>My Todo List</h1>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
