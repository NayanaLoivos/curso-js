import './TextField.css'

function TextField(props) {   
    let valueInput = 'Nayana'

    function onChange(event) {
      valueInput = event.target.value
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