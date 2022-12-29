/*
 Write a function to find the longest common prefix string amongst an array of strings.
 If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(str) {
  let strSort = str.sort();
  let first = strSort[0];
  let last = strSort[str.length - 1];
  let result = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i];
    } 
    else if (first[i] !== last[i]) {
      break;
    }                                            
  }
  return result;
} /*time complexity O(n * n) space complexity O(1)*/
