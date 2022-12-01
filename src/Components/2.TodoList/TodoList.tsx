import React from 'react'
import { Todo } from '../../Models/model';
import Card from '../3.Card/Card';


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos__container'>

            <div className='todos'>
                <div className='task__remaining_title'>
                    <h2> Task remaining  </h2>
                </div>
                {
                    todos.map(todo => {
                        return (
                            <Card
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos} />
                        )

                    })
                }
            </div>

            <div className='todo__done'>
                <div className='task__remaining_title'>
                    <h2> Task Done </h2>
                </div>
            </div>
        </div>

    )
}

export default TodoList