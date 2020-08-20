function swap(arr, a, b) {
    return [arr[a], arr[b]] = [arr[b], arr[a]];
}


function insertionSort(arr) {  
    for(let i = 1; i < arr.length; i++) {
        while(arr[i-1] && arr[i] < arr[i-1]) {
            swap(arr, arr[i], arr[i-1]);
        }
    }
}