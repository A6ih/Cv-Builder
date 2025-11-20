const replaceEdu = (arr, index, value, property) => {
    const newArr = arr.map(edu => {
        if(edu.id === index) {
            return {...edu, [property]: value}
        } else {
            return edu
        }
    })
    return newArr
}

const addEdu = () => {
    return [{id: crypto.randomUUID(), degree:"", institution:"", yearStart:"", yearEnd:""}]
}

export {replaceEdu, addEdu}