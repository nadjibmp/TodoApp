import React from 'react'
import { Todo } from '../../Models/model';
import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import '../1.InputField/Style.css';
interface Props {
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Card: React.FC<Props> = ({ todo, setTodos }) => {
    return (
        <form className='todos__single'>
            <span className='todos__single--text'>{todo.todo}</span>
            <div>
                <span className="icon"> <MdDone/> </span>
                <span className="icon"> <MdDelete/> </span>
                <span className="icon"> <MdEdit/> </span>
            </div>
        </form>
    )
}

export default Card