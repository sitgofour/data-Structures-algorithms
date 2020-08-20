

function binarySearch(list, target) {
    startIndex = 0
    endIndex = list.length - 1

    while(startIndex <= endIndex) {
        midIndex = Math.floor((startIndex + endIndex) / 2);

        if(list[midIndex] === target) {
            return midIndex;
        }
        if(list[midIndex] > target) {
            startIndex = midIndex + 1;
        }
        if(list[midIndex] < target) {
            endIndex = midIndex - 1;
        }
    }
    return -1;
}