/*
    Given two binary strings a and b, return their sum as a binary string.
*/

function addBinary (a, b) {
    let bigint = BigInt('0b' + a) + BigInt('0b' + b);
    return bigint.toString(2);
 };
