const Input = ({label, text, handleInput, inputType, placeholdText}) => {
    return (
        <label>{label} <input name="placeholder" type={inputType} onChange={handleInput} value={text} placeholder={placeholdText}/>
        </label>
    )
}

export default Input