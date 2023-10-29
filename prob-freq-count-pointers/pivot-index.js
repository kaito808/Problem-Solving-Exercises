// add whatever parameters you deem necessary
function pivotIndex(arr) {
    //left to pivit === pivit to right
    let pivit = 1;
    let start = 0;
    let end = arr.length;

    while(pivit<end){
        let leftToPivit = arr.slice(start, pivit+1);
        let rightToPivit = arr.slice(pivit, end);
        let leftSum =leftToPivit.reduce((partialSum, a) => partialSum + a, 0);
        let rightSum = rightToPivit.reduce((partialSum, a) => partialSum + a, 0);
        console.log(pivit);
        
        if (leftSum === rightSum){
            return pivit;
        }else{
            pivit ++;
            console.log(leftSum);
            console.log(rightSum);
        }
    }
    return -1;
}
pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index
// pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = 