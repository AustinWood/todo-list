import configureStore from "./store/store.js";
import {allTodos} from "./reducers/selectors.js";

import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render() {
    return(
      <div>
        Hello World!
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore;
  window.store = store;

  window.allTodos = allTodos;
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
