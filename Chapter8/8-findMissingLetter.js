function findMissingLetter(string){
    let presentLettersHash = {};
    let allLettersString = 'abcdefghijklmnopqrstuvwxyz'

    for(let i = 0; i < string.length; i++){
        let currentCharacter = string.substring(i, i+1);

        if(!presentLettersHash[currentCharacter]){

            presentLettersHash[currentCharacter] = true;

        }
    }
    console.log(presentLettersHash);
    
    for(let i = 0; i < allLettersString.length; i++){
        let currentCharacter = allLettersString.substring(i, i+1);

        if(!presentLettersHash[currentCharacter]){
            return `Missing letters is '${currentCharacter}'`;
        }
        
    }
}

console.log(findMissingLetter("the quick brown fox jumped over the lazy dog"));