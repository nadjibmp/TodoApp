import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../../Models/model';
import Card from '../3.Card/Card';


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos__container'>
            <Droppable droppableId="todoListRemaining">
                {
                    (provided) => (
                        <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
                            <div className='task__remaining_title'>
                                <h2> Task remaining  </h2>
                            </div>
                            {
                                todos.map((todo, index) => {
                                    return (
                                        todo.isDone === false &&
                                        <Card
                                            index={index}
                                            todo={todo}
                                            key={todo.id}
                                            todos={todos}
                                            setTodos={setTodos} />
                                    )

                                })
                            }
                            {
                                provided.placeholder
                            }
                        </div>)

                }

            </Droppable>

            <Droppable droppableId='todoListDone'>
                {
                    (provided) => (
                        <div className='todo__done' ref={provided.innerRef} {...provided.droppableProps}>
                            <div className='task__remaining_title'>
                                <h2> Task Done </h2>
                            </div>
                            {
                                todos.map((todo, index) => {
                                    return (
                                        todo.isDone === true &&
                                        <Card
                                            index={index}
                                            todo={todo}
                                            key={todo.id}
                                            todos={todos}
                                            setTodos={setTodos} />
                                    )
                                })
                            }
                            {
                                provided.placeholder
                            }
                        </div>
                    )
                }
            </Droppable>

        </div>

    )
}

export default TodoList