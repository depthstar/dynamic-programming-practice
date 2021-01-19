
const allConstruct = (target, wordBank) => {

}

//testing
console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl']));
//[
    //  ['purp', 'le'],
    //  ['p', 'ur', 'p', 'le']
//]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
//[
    //['ab', 'cd', 'ef'],
    //['ab', 'c', 'def'],
    //['abc', 'def'],
    //['abcd', 'ef']
//]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //[]
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //4

console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", 
[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee"
]
)); // []]