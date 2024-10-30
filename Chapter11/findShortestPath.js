// Given a grid find the number of shortest paths possible if you start at the top left block and finish at the bottom right block.

function findShortestPath(numOfRows, numOfColumns){
    if(numOfRows == 1 || numOfColumns == 1){
        return 1;
    }
    return findShortestPath(numOfRows - 1, numOfColumns) + findShortestPath(numOfRows, numOfColumns - 1);
}

console.log(findShortestPath(3, 4));