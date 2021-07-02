nums = [2, 7, 11, 15];
target = 9;
for (let i = 0; i < nums.length(); i++) {
    for (let j = 0; j < nums.length(); j++) {
        if (i + j === target) {
            console.log(nums[i], [j])
        }
    }
}