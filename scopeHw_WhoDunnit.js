const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//TODO The murderer is Miss Scarlet

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//TODO Error - The variable murderer is assigned with const keyword and it cannot be reassigned. When the
//TODO changeMurderer functions is called, it tries changing the variable murderer and results in error.

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//TODO First Verdict: The murderer is Mrs. Peacock
//TODO Second Verdict: The murderer is Professor Plum
//TODO the declareMurderer is called and a local variable with value Mrs Peacock is created. The function returns a string 
//TODO with refering to local variable. This is not impacting the outer variable which is accessed by second verdict.