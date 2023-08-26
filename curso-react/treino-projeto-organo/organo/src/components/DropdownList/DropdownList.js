import './DropdownList.css'

function DropdownList(props) {
    console.log(props)
    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default DropdownList