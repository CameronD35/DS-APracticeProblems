function findX(string, index=0){
    let letterBeingChecked = string[index];
    if(letterBeingChecked =='x'){
        return `x found at index ${index}`;
    } else if(index == string.length-1){
        return `no 'x' found`;
    } else {
        let nextIndex = index + 1;
        return findX(string, nextIndex);
    }
}

console.log(findX('xweiyurfbviuyolpdffwevyf'));