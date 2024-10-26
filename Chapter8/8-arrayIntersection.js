function findArrayIntersection(arr1, arr2){

    let intersectionArray = [];
    let hashTable = {};

    for(let val of arr1){
        hashTable[val] = true;
    }

    for(let val of arr2){
        if(hashTable[val]){
            intersectionArray.push(val)
        }
    }

    return intersectionArray;
}

console.log(findArrayIntersection([1,2,3], [3,4,2,6,8]));