/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1; // unique first element
    
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from previous unique element
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Place unique element at position k
            k++; // Move to next position for unique elements
        }
    }
    
    return k;
};