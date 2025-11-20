const Section = ({children, header}) => {
    return (
        <>
         <h1>{header}</h1>
         <div>
            {children}
         </div>
        </>
    )
}

export default Section