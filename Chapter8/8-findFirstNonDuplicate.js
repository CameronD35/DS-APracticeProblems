function findFirstNonDuplicate(string){

    let splitString = string.split('')

    let foundLettersHash = {};

    for(let letter of splitString){

        if(foundLettersHash[letter] == null){

            foundLettersHash[letter] = true;

        } else {
            foundLettersHash[letter] = false;
        }
        
    }

    for(let letter of splitString){

        if(foundLettersHash[letter]){

            return `The first non-duplicate is ${letter}`;

        }

    }

}

console.log(findFirstNonDuplicate("minimum"));