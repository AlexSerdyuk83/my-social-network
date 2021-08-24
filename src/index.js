import {store} from "./store/store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// rerenderEntireTree(store.getState());
//
// store.subscribe(rerenderEntireTree) вызывается при использовании самописного стора
//
// store.subscribe(() => {
//   const state = store.getState()
//   rerenderEntireTree(state);
// });
