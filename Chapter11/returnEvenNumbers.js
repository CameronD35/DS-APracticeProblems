function returnEvenNumbers(array, index){

    if(index-array.length <= 0){
        let isEven = (array[0] % 2 == 0);
        if(array.length == 1 && isEven){
            return array;
        } else if (array.length == 1 && !isEven){
            return "no even numbers found.";
        } else {
            console.log('hi');
            return array;
        }
    }

    if(array[index] % 2 == 0){
        let newIndex = index + 1;
        return returnEvenNumbers(array, newIndex);
    } else {
        array.splice(index, 1);
        return returnEvenNumbers(array, index);
    }
    
}

console.log(returnEvenNumbers([2], 0));
