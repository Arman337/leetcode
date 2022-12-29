/* 
 The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 (you may want to display this pattern in a fixed font for better legibility)
*/

function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  
  let arr = [];
  let flag = true;
  let dir = 0;

  for (let i = 0; i < numRows; i++) {
    arr[i] = '';
  }

  for (let i = 0; i < s.length; i++) {
    if (dir < arr.length && flag) {
      arr[dir] += s[i];
      dir++;
      if (dir >= arr.length) {
        dir--;
        flag = false;
      }
    }
    else {
      dir--;
      arr[dir] += s[i];
      if (dir === 0) {
        dir = 1;
        flag = true;
      }   
    }
  }
  
  return arr.join('');
}; /*time complexity O(n) space complexity O(1)*/
                                               