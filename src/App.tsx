import React, { useState } from 'react';
import './App.css';
import InputField from './Components/1-InputField/InputField';
import { Todo } from './Models/model';
import TodoList from './Components/2-TodoList/TodoList';

const App: React.FC = () => {

  // store all the todo in state .. 
  const [todo, setTodo] = useState<string>("");

  // store all the todos in state ..
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    //Updating the state with in the todos array ...
    if (todo) {
      setTodos([...todos, {
        id: Date.now(),
        isDone: false,
        todo: todo
      }])
    }

    // Clear the input field ...
    setTodo("");
  }

  //For testing purpose ...

  return (
    <div className="App">
      <h1 className="heading"> Taskify </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
