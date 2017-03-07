import React from 'react';
import TodoListItem from "./todo_list_item";

const TodoList = ({todos}) => {
  const listItems = todos.map((todo, idx) => (
    <TodoListItem key={idx} todo={todo} />
  ));

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default TodoList;
