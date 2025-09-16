/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLen = 0;

    for(let r=0; r<s.length; r++){
        while(set.has(s[r])){
            set.delete(s[left]);
        left++
        }
    set.add(s[r]);
    
    maxLen = Math.max(maxLen, r-left+1);        
    }  

    return maxLen

};