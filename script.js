function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      // Pick element at index i
      const current = arr[i];
      // j tracks the insertion point
      let j = i - 1;
  
      // Shift elements to the right until a smaller element is found
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element at the correct position
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [5, 2, 4, 6, 1, 3];
  const sortedArray = insertionSort(unsortedArray);
  
  console.log("Unsorted array:", unsortedArray);
  console.log("Sorted array:", sortedArray);