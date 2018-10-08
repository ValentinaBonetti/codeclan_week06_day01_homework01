// Remove comments from one episode per time
// See comments at the end of each episode for prediction and actual result.


// Episode 1
console.log("EPISODE 1 \n");

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

console.log("\n");

// EXPECTED: `The murderer is Miss Scarlet`
// Reason: scenario object variables are accessible through
// scenario.<variable> and the function declareMurderer is accessible
// as well because in scope (global).
// ACTUAL: The murderer is Miss Scarlet.


// Episode 2
console.log("EPISODE 2 \n");

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

console.log("\n");

// EXPECTED: Error
// Reason: changeMurderer tries to access a global
// variable which is constant, this should return error.
// If it was a local variable the function wouldn't have done
// anything though, because there is no return, and if there was
// return the call wouldn't have done anything, because there isn't
// an assignment.
// ACTUAL: Error
// SyntaxError: Identifier 'declareMurderer' has already been declared


// Episode 3
console.log("EPISODE 3 \n");

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

console.log("\n");

// EXPECTED: First Verdict: The murderer is Mrs. Peacock.
//           Second Verdict: The murderer is Professor Plum.
// reason: murderer inside declareMurderer is locally changed,
// even if the temporary murderer is accessible (not const).
// The change is local, so the second verdit sees Prof Plum,
// which is in scope.
// ACTUAL: First Verdict:  The murderer is Mrs. Peacock.
//         Second Verdict:  The murderer is Professor Plum.


// Episode 4
console.log("EPISODE 4 \n");

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);


console.log("\n");

// EXPECTED: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//           Suspect three is Mrs. Peacock.
// reason: the function doesn't change suspectThree globally,
//         but it does locally.
// ACTUAL: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//         Suspect three is Mrs. Peacock.


// Episode 5
console.log("EPISODE 5 \n");

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

console.log("\n");

// EXPECTED: The weapon is the Revolver.
// reason: const doesn't prevent object values to be changed, and the
//         function changeWeapon change the global object scenario.
// ACTUAL: The weapon is the Revolver.

// Episode 6
console.log("EPISODE 6 \n");

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


console.log("\n");

// EXPECTED: The murderer is Mrs. White.
// reason: plotTwist acts on the temporary variable murderer (in scope)
//         even if it doesn't return anything, but it's called when changeMurderer
//         is called (terrible programming though!).
// ACTUAL: The murderer is Mrs. White.


// Episode 7
console.log("EPISODE 7 \n");
//
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


console.log("\n");

// EXPECTED: The murderer is Miss Scarlet.
// reason: The function is declare within the previous and cannot be used outside.
// ACTUAL: The murderer is Mr. Green.
// Comment: I can't see why...



// Episode 8
console.log("EPISODE 8 \n");

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

console.log("\n");

// EXPECTED: The weapon is Candle Stick
// reason: Just follow the cascade of calls...
//         All ifs evaluate to true and all variables in scope.
// ACTUAL: The weapon is Candle Stick.


// Episode 9
console.log("EPISODE 9 \n");

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

console.log("\n");

// EXPECTED: The murderer is Professor Plum.
// reason: Mrs Peacock is assigned to a temporary variable inside the block,
//         so this declaration doesn't leak outside of that block.
// ACTUAL: The murderer is Professor Plum.


// EXTENSION:
// Episode 10
console.log("EPISODE 10 \n");

// var murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   var murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     var murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       var murderer = 'Miss Scarlet';
//       return murderer;
//     }
//
//     murderer = unexpectedOutcome();
//     return murderer;
//   }
//
//   murderer = plotTwist();
//   return murderer;
// }
//
// murderer = changeMurderer();
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
//
// const verdict = declareMurderer();
// console.log(verdict);

console.log("\n");

// EXPECTED: The murderer is Miss Scarlet.
// reason: ...the function returned valued is assigned to murderer
// ACTUAL: The murderer is Miss Scarlet.
