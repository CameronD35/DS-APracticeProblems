class Stack {

    constructor(){
        this.stack = [];
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        return this.stack.pop();
    }

    read(){
        return this.stack[this.stack.length-1];
    }
}

function reverseString(string){
    let originalStack = new Stack();
    let newStack = new Stack();

    for(let i = 0; i < string.length; i++){
        originalStack.push(string[i]);
    }
    
    for(let i = 0; i < string.length; i++){
        let poppedLetter = originalStack.pop();

        newStack.push(poppedLetter);
    }
    

    

    return newStack.stack;
}

console.log(reverseString("1234567890"));