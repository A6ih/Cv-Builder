const toggleDiv = (e) => {
    const icon = e.currentTarget.children[1]
    const sibling = e.currentTarget.nextSibling
    if(sibling.classList.contains("inactive") || sibling.classList.contains("drop-inactive")) {
        sibling.classList.remove("inactive")
        sibling.classList.remove("drop-inactive")
        sibling.classList.add("drop-active")
        icon.classList.add("rotate-icon")
        return
    } else {
        sibling.classList.remove("drop-active")
        sibling.classList.add("drop-inactive")
        icon.classList.remove("rotate-icon")
    }
}

const Section = ({children, header, className, spanClass = "icon"}) => {
    return (
        <>
         <button className="section-button" onClick={toggleDiv}>
            <h2>{header}</h2>
            <span className={spanClass}>V</span>
         </button>
         <div className={className}>
            {children}
         </div>
        </>
    )
}

export default Section