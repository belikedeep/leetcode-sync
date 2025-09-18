/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let current = values[s[i]];
        let next = values[s[i + 1]]; // undefined if last char

        // if current is smaller than next, we subtract
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total
};