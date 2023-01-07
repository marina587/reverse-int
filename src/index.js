module.exports = function reverse (n) {
   let num = n.toString();
    let i = num.split("").reverse().join("");
    return parseInt(i,10);
}
