import React from 'react'
import { Todo } from '../../Models/model';
import Card from '../3.Card/Card';


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {
                todos.map(todo => {
                    return (
                        <Card 
                            todo={todo} 
                            key={todo.id}
                            setTodos={setTodos}/>
                    )
                })
            }

        </div>
    )
}

export default TodoList