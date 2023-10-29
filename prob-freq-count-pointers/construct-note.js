// add whatever parameters you deem necessary
function constructNote(message, letter) {
    // console.log(`message is ${message}, ${message.length}`);
    // console.log(`letter is ${letter}, ${letter.length}`);
    if (message.length > letter.length) return false;
    
    // message + letter
    const characters1 = {};
    for (chr in message){
        characters1[message[chr]] = (characters1[message[chr]]+1) || 1;
    }
    
    // console.log(characters1);

    const characters2 = {};
    for (chr in letter){
        characters2[letter[chr]] = (characters2[letter[chr]]+1) || 1;
    }
    
    // console.log(characters2);

    for (i in characters1){
        // console.log(i);
        if(!characters2[i]) return false;
        if(characters2[i] !== characters1[i]) return false;
    }
    return true;
    
}

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

