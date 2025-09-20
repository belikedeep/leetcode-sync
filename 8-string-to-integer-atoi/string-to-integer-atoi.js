/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    let res = parseInt(s, 10);
    
    if (res !== res) return 0;
    if (res < -2147483648) return -2147483648;
    if (res > 2147483647) return 2147483647;
    
    return res;
};