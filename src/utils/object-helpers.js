export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return { ...item, ...newObjProps }
        }
        return item;
    })
}

export const addPostINArray = () => {

}
// { id: 3, message: action.value, like: 0 }
// state.peoplesData.map(people => {
//     if (people.id === action.peopleId) {
//         return {...people, followed: true}
//     }
//     return people;
// })