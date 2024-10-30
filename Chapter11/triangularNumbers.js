function returnTriangularNumber(termNumber, operationCount=0, total=0){
    if (termNumber == 1){
        return 1;
    }

    if (termNumber < operationCount){
        return total;
    }

    let currentAmount = operationCount + 1;

    let value = total + operationCount;

    return returnTriangularNumber(termNumber, currentAmount, value);


}

console.log(returnTriangularNumber(567));