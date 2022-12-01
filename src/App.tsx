import React, { useState } from 'react';
import './App.css';
import InputField from './Components/1.InputField/InputField';
import { Todo } from './Models/model';
import TodoList from './Components/2.TodoList/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

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

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    // Source Logic
    if (source.droppableId === "todoListRemaining" && destination.droppableId === "todoListDone") {
      setTodos(todos.map(todo => todo.id === todos[source.index].id ? { ...todo, isDone: true } : todo));
    } else if (source.droppableId === "todoListDone" && destination.droppableId === "todoListRemaining") {
      setTodos(todos.map(todo => todo.id === todos[source.index].id ? {...todo, isDone: false}: todo));
    }
  };

  console.log(todos);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1 className="heading"> Taskify </h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </DragDropContext>

  );
}

export default App;
