let findNthMax = (n, arr)=> {
    // Sorting by descending order
    arr = arr.sort((a,b)=> b-a);
    // Remove Duplicates
    arr = [...new Set(arr)];
    console.log(arr)
    return arr[n-1];
}

console.log(findNthMax(5, [100, 200, 200, 250, 300, 50, 500]));