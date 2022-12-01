import React, { useState } from 'react'
import { Todo } from '../../Models/model';
import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import '../1.InputField/Style.css';
import { Draggable } from 'react-beautiful-dnd';
interface Props {
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    todos: Array<Todo>,
    index: number
}
const Card: React.FC<Props> = ({ todo, setTodos, todos, index }) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [valuetoEdit, setValueToEdit] = useState<string>(todo.todo);

    // responsable for editing the single todo ...
    const EditSingleTodo = (): void => {
        try {
            if (valuetoEdit !== undefined && todo.isDone === false && !isEditing) {
                setIsEditing(true);
            }
            else {
                setIsEditing(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const UpdateTodoField = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setValueToEdit(event.currentTarget.value);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEditTodo = (e: React.FormEvent, id: number): void => {
        try {
            e.preventDefault();
            setTodos(
                todos.map(todo => todo.id === id ? { ...todo, todo: valuetoEdit } : todo)
            )
            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteTodo = (id: number): void => {
        try {
            setTodos(
                todos.filter(todo => { return todo.id !== id })
            );
        } catch (error) {
            console.log(error);
        }
    }

    const handleDone = (id: number): void => {
        try {

            setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: true } : todo))

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (
                    <form
                        className='todos__single'
                        onSubmit={(e) => handleEditTodo(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >

                        {
                            isEditing ?
                                <input
                                    type="text"
                                    value={valuetoEdit}
                                    onChange={UpdateTodoField} />
                                :
                                <span className='todos__single--text'>{todo.todo}</span>
                        }
                        <div>
                            <span className="icon"> <MdDone onClick={() => handleDone(todo.id)} /> </span>
                            <span className="icon"> <MdDelete onClick={() => handleDeleteTodo(todo.id)} /> </span>
                            <span className="icon" onClick={EditSingleTodo}> <MdEdit /> </span>
                        </div>
                    </form>
                )
            }
        </Draggable>
    )
}

export default Card