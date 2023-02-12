/*
  You are given a large integer represented as an integer array digits,
  where each digits[i] is the ith digit of the integer.
  The digits are ordered from most significant to least significant in left-to-right order.
  The large integer does not contain any leading 0's.
  Increment the large integer by one and return the resulting array of digits.
*/
function plusOne(digits) {
    digits.reverse();
    let b = [1];
    for (let i = 0; i < b.length; ++i) {
      if ((digits[i] = ~~digits[i] + ~~b[i]) > 9) {
        digits[i] -= 10;
        b[i + 1] = ~~b[i + 1] + 1;
      }
    }
      return digits.reverse();
};

/*time complexity O(n) space complexity O(1)*/
