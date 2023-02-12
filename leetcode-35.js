/*
    Given a sorted array of distinct integers and a target value,
    return the index if the target is found. If not,
    return the index where it would be if it were inserted in order.
*/

function searchInsert(nums, target) {
    let result = [];
    nums.forEach((val, ind) => {
        if (val >= target) {
            result.push(ind);
        }
    });
    if (result[0] === undefined) {
        result[0] = nums.length;
    };
    return result[0];
};
