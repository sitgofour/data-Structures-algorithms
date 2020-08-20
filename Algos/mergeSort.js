

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;

    let result = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    if(i < arr1.length) {
        while(i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
    } else if(j < arr2.length) {
        while(j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

function mergeSort(arr, start, end) {

    if(arr.length < 2) return arr;
        let mid = Math.floor((start + end) / 2);

        let left = mergeSort(arr, 0, mid);
        let right = mergeSort(arr, mid + 1, arr.length-1);
        return merge(left, right);
    
}