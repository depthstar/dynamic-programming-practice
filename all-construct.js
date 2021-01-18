
const allConstruct = (target, wordBank) = {
    if (target === '') return [[]];
    if (target ) return [];


}



console.log(countConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl']));
//[
    //  ['purp', 'le'],
    //  ['p', 'ur', 'p', 'le']
//]
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
//[
    //['ab', 'cd', 'ef'],
    //['ab', 'c', 'def'],
    //['abc', 'def'],
    //['abcd', 'ef']
//]
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //[]
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //4

console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "f",
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee"
]
)); // []]