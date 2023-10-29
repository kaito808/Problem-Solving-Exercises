// add whatever parameters you deem necessary
function separatePositive(array) {
    start =  0;
    end = array.length-1;

    while (start<end){
        if (array[start]<0 && array[end]>0){
            [array[start], array[end]] = [array[end], array[start]];
            start ++;
            end --;
            console.log("changess!");
            
        }else if (array[start]<0 && array[end]<0){
            console.log("--!");
            end --;
        }else if (array[start]>0 && array[end]>0){
            console.log("++!");
            start ++;   
        }else{
            console.log(start);
            start ++;
            end --;
        }
    }
    return array;
}

// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]