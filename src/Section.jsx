const toggleDiv = (e) => {
    const icon = e.currentTarget.children[1]
    const sibling = e.currentTarget.nextSibling
    icon.classList.toggle("rotate-icon")
    sibling.classList.remove("inactive")
    sibling.classList.toggle("drop-active")
}

const Section = ({children, header, className}) => {
    return (
        <>
         <button className="section-button" onClick={toggleDiv}>
            <h2>{header}</h2>
            <span>V</span>
         </button>
         <div className={className + " " + "inactive drop-inactive"}>
            {children}
         </div>
        </>
    )
}

export default Section