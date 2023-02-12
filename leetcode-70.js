/*
    You are climbing a staircase.
     It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps.
     In how many distinct ways can you climb to the top?
*/

function climbStairs(n) {
let result = 3;
let save = 2;

    if (n < 3) {
        return n;
    }
    function foo(a, b) {
        save = result;
        result = a + b;
    }
        for (let i = 3; i < n; i++) {
            foo(result, save);
        }
    return result;
}
