import React from 'react'
import { Todo } from '../../Models/model';


interface Props {
    todos :Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList :React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div>

        </div>
    )
}

export default TodoList