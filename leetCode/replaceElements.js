/*1299. Replace Elements with Greatest Element on Right Side
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
After doing so, return the array.
Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
 
Constraints:

1 <= arr.length <= 104
1 <= arr[i] <= 105
*/
var replaceElements = function(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > arr[i - 1]) {
            arr[i - 1] = arr[i]
        }
    }
    arr.shift();
    arr.push(-1);
    return arr;
};
/*What did I learn?
I learned to use reverse loop for replace element with next element.
using shift() for removing elemnt from beginning & using push(-1) to add -1 at the end of array.*/

//second way
var replaceElements = function(arr) {
    return arr.map((x, i) =>
        i == arr.length - 1 ? -1 : Math.max(...arr.slice(i + 1, arr.length))
    );
};