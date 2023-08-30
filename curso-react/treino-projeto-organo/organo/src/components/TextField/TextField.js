import { useState } from 'react'
import './TextField.css'

function TextField(props) {           
    function onChange(event) {        
        props.changed(event.target.value)       
    }
    
    return(
        <div className="text-field">      
            <label>{props.label}</label>
        <input value={props.valueInput} onChange={onChange} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}
export default TextField