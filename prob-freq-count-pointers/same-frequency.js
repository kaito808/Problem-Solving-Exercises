// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    first = {};
    second = {};

    string1 = num1.toString().split('');
    string2 = num2.toString().split('');

    
    
    for (i in string1){
        // console.log(string1[i]);
        first[string1[i]] = (first[string1[i]] + 1) || 1;
    }
    // console.log(first);

    for (i in string2){
        // console.log(string2[i]);
        second[string2[i]] = (second[string2[i]] + 1) || 1;
    }
    // console.log(second);


    for (j in first){
        // console.log(j);
        if (!second[j]) return false;
        if (second[j] !== first[j]) return false;
    }

    return true;
    
}

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false