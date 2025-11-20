const InputYear = ({label, text, handleInput, inputType}) => {
    return (
        <label className="years">{label} <input type={inputType} onChange={handleInput} value={text} min="1901" max="2099" step="1"/>
        </label>
    )
}

export default InputYear