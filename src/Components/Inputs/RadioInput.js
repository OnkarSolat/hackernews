

const RadioInput = ({name, group, checked, onChange}) => (
    <label htmlFor={name} className='radioInput-label'>
        <input 
            type="radio" 
            id={name} 
            value={name} 
            name={group} 
            checked={checked} 
            onChange={onChange} 
            className='radioInput'/>
        {name}
    </label>
)

export default RadioInput;