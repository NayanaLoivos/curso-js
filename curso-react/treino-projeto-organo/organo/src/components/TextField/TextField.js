import { useState } from 'react'
import './TextField.css'

function TextField(props) {   
    const [valueInput, setValue] = useState('Nayana')    
    
    function onChange(event) {
        setValue(event.target.value)
        console.log(valueInput)
    }
    
    return(
        <div className="text-field">      
            <label>{props.label}</label>
        <input value={valueInput} onChange={onChange} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}
export default TextField