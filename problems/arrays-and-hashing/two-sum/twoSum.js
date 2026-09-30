function twoSum(nums, target) {
    let seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));   // esperado: [0, 1]
console.log(twoSum([3, 2, 4], 6));        // esperado: [1, 2]
console.log(twoSum([3, 3], 6));           // esperado: [0, 1]
console.log(twoSum([1, 5, 3, 8, 2], 10)); // esperado: [3, 4]