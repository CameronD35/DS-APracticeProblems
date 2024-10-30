function returnNumOfChar(array){
    console.log(array[0].length);
    if(array.length === 1){
        return array[0].length;
    }
    return (array[0].length + returnNumOfChar(array.slice(1, array.length)));
}

let array = ['ab', 'c', 'def', 'ghij'];

console.log(returnNumOfChar(array));