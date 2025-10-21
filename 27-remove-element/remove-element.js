/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // counts elements not equal to val
    let k = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            // move non-val elements to the front
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
