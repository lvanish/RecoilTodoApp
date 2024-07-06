import React from "react";
import { RecoilRoot } from "recoil";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1>Recoil</h1>
      <h2>Todo list app</h2>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
};

export default App;
