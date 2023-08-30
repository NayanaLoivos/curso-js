import './DropdownList.css'

function DropdownList(props) {
    function onChange(event){
        props.changed(event.target.value)
    }
    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={onChange} required={props.required} value={props.valueInput}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default DropdownList