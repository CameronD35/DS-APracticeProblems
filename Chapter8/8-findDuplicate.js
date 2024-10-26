function findDuplicate(array){

    let hashTable = {}

    for(let val of array){
        if(hashTable[val]){
            return val;
        }

        hashTable[val] = true;
    }

    return "No duplicates found."
}

console.log(findDuplicate(['a', 'g', 'f', 'h', 'a']));