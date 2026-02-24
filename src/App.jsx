import { useState } from "react";
import { Trash2 } from 'lucide-react';
import TodoList from "./components/TodoList";


const App = () => {

  return (
    <div className="main-container">
      <h1>TODO LIST</h1>
      <TodoList />
    </div>
  )
}

export default App;