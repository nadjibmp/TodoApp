import React, { useState } from 'react'
import { Todo } from '../../Models/model';
import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import '../1.InputField/Style.css';
interface Props {
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Card: React.FC<Props> = ({ todo, setTodos }) => {

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
    return (
        <form className='todos__single'>

            {
                isEditing ?
                    <input type="text" value={valuetoEdit} onChange={UpdateTodoField}/>
                    :
                    <span className='todos__single--text'>{todo.todo}</span>
            }
            <div>
                <span className="icon" onClick={EditSingleTodo}> <MdDone /> </span>
                <span className="icon"> <MdDelete /> </span>
                <span className="icon"> <MdEdit /> </span>
            </div>
        </form>
    )
}

export default Card