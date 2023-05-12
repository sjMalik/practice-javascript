const getNthMax = function(arr, n) {
    // Sort the array in descending order
    arr = arr.sort((a,b)=> b-a);
    // Remove the duplicates
    arr = [...new Set(arr)];
    return arr[n-1];
}


console.log(getNthMax([100, 200, 200, 300, 400], 4));   // 100