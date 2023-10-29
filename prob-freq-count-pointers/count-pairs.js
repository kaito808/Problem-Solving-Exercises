// add whatever parameters you deem necessary
function countPairs(nums, target) {
    let pairs = 0;

    let start = 0;
    let end = nums.length-1;

    console.log(nums);
    nums.sort((a, b) => a - b);
    console.log(nums);
    
    while(start<end){
        console.log(nums[start]);
        console.log(nums[end]);
        if(nums[start] + nums[end] === target) {
            pairs ++;
            start ++;
            end --;
            console.log("match");
        }
        if(nums[start] + nums[end] > target){
            console.log(end);
            end --;
            console.log(end);
        }
        if(nums[start] + nums[end] < target){
            console.log(start);
            start ++;
            console.log(start);
        }
    }
    
    return pairs; 
}

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4);
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2