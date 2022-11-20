import React from 'react'
import './Style.css';
interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e:React.SyntheticEvent) => void
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {

    return (
        <form onSubmit={handleAdd}>
            <input type="input"
                placeholder="Enter a Todo"
                value={todo}
                onChange={
                    (e) => {
                        setTodo(e.target.value);
                    }
                }
                className='input__box' />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    )
    }

    export default InputField