/*
    Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal substring consisting of non-space characters only.
*/

function lengthOfLastWord(s) {
    let res = s.split(" ");
    for (let i = 0; i < res.length; i++) {
        if (res[i] === "") {
            res.splice(i, 1);
            i--
        }
    }
    return res[res.length - 1].length;
};

/*time complexity O(n) space complexity O(1)*/
