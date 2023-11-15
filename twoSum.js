var twoSum = function (nums, target) {
    let hashmap = new Map();
for (let i = 0; i < nums.length; i++) {
    let isSecondValue = target - nums[i]
    if (hashmap.has(isSecondValue)) {
        return [i, hashmap.get(isSecondValue)]
    }

    hashmap.set(nums[i], i)
}
return []
};