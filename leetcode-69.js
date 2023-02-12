/*
    Given a non-negative integer x,
    return the square root of x rounded down to the nearest integer.
    The returned integer should be non-negative as well.
*/

function mySqrt(x) {
    let result = Math.sqrt(x);
    return Math.floor(result);
 };
 