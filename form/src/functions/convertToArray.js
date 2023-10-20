const convertToArray = (object) => {
    var array = []
    for(var i in object){
        console.log(i)
        array.push({[i] : object[i]})
    }

    return array;
}


export default convertToArray;