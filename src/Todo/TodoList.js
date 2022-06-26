import React from 'react';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    mardin: 0,
    padding: 0,
  },
};

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul style={styles.ul}>
      {todos.map((todo, idx) => {
        return (
          <TodoItem todo={todo} key={todo.id} idx={idx} onChange={onToggle} />
        );
      })}
    </ul>
  );
};

export default TodoList;
