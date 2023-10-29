// add whatever parameters you deem necessary
function isSubsequence(word, characters) {
    wordPointer = 0;
    chrPointer  = 0;
    console.log(word[wordPointer])

    while (chrPointer<characters.length){
        
        if (word[wordPointer] === characters[chrPointer]){
            wordPointer ++;
            chrPointer ++;     
            // console.log(wordPointer, chrPointer);
            console.log("match");
        }else if(word[wordPointer] !== characters[chrPointer]){
            chrPointer ++; 
            console.log(wordPointer, chrPointer);
            console.log("no match");
        }else if (wordPointer>word.length){
            console.log(wordPointer, chrPointer);
            console.log("no more chr");
            return true;
        }else{
            break;
        }
        // console.log(wordPointer, chrPointer);
    }
    return false;
}
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)