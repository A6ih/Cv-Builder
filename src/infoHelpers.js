const replaceInfo = (arr, index, value, property) => {
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

const addWork = () => {
    return [{id: crypto.randomUUID(), role:"", company:"", dateStart:"", dateEnd:"", description:""}]
}

const deleteField = (fn, array, id) => {
    setTimeout(() => fn(array.filter(obj => obj.id !== id)), 300)
}

export {replaceInfo, addEdu, deleteField, addWork}