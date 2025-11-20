const Input = ({label, text, handleInput, inputType}) => {
    return (
        <label>{label} <input type={inputType} onChange={handleInput} value={text}/>
        </label>
    )
}

export default Input