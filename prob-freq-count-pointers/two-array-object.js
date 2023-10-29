// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const object = {};
    for (i in keys){
        // console.log(keys[i]);
        // console.log(values[i]);
        if (values[i]){
            object[keys[i]] = values[i];
        }else{
            object[keys[i]] = null;
        }
        
    }
    return object;
    
}

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}