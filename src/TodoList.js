import TodoItem from './TodoItem';
import React from 'react';

const TodoList = ({items}) => (
  <ul>
    {items.map(item => <TodoItem key={item.id} item={item} />)}
  </ul>
);

export default TodoList;