let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/gm; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);


// . wildcard that matches anything
// [^ tells you what not to look for]
// + look for things consecutively
// * mark chars that appear 0 or more times
// g Perform a global match (find all matches rather than stopping after the first match)
// m Perform multiline matching
// i Perform case-insensitive matching
//...
