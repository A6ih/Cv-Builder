const Section = ({children, header, className}) => {
    return (
        <>
         <h1>{header}</h1>
         <div className={className}>
            {children}
         </div>
        </>
    )
}

export default Section