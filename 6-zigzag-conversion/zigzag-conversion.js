/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || numRows >= s.length) return s;

    let rows = new Array(numRows).fill().map(() => []);
    let row = 0;
    let down = false;

    for(const c of s) {
        rows[row].push(c);
        if(row === 0 || row === numRows - 1) down = !down;
        row += down ? 1 : -1;
    }

    let result = "";
    for(const r of rows) result += r.join("");
    return result;
};