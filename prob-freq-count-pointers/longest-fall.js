// add whatever parameters you deem necessary
function longestFall(arr) {
    console.log(arr)
    if (!arr[0]) return 0;
    
    sequence = 1;
    longest = 1;

    for (i in arr){
        // console.log(arr[Number(i)+1]);
        if (arr[i]>arr[Number(i)+1]){
            sequence ++;
            if (sequence>longest)longest = sequence;
            // console.log("sequence", sequence);
        }else if (arr[i]<=arr[Number(i)+1]){
            // console.log("reset");
            if (sequence>longest)longest = sequence;
            sequence = 1;
        }
    }
    console.log(longest);
}

longestFall([5, 3, 1, 3, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
// longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
// longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
// longestFall([]) // 0
longestFall([8]) // 1
longestFall([1,4,56]) // 1