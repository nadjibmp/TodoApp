import React from 'react'
import './Style.css';
const InputField = () => {
    return (
        <form>
            <input type={"input"} placeholder="Enter a Todo" className='input__box'/>
            <button className='input__submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField