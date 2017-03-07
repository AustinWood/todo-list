import React from 'react';
import ReactDOM from 'react-dom';

import Root from "./components/root.jsx";
import configureStore from "./store/store.js";
import {allTodos} from "./reducers/selectors.js";
import TodoListItem from "./components/todo_list/todo_list_item.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore;
  window.store = store;

  window.allTodos = allTodos;

  window.TodoListItem = TodoListItem;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
