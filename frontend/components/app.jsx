import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from "./todo_list/todo_list_container.jsx";

const App = () => ({
  render() {
    return(
      <div>
        <TodoListContainer />
      </div>
    );
  }
});

export default App;
