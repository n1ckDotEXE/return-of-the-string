/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(param) {
  return param + "!";
}

function getFirstCharacter(param) {
  return param[0]
}

function getLastCharacter(param) {
  return param[param.length -1]
}

function getOneCharacter(param1, param2) {
  return param1[param2];
}

function getTwoCharacters(param1, param2, param3) {
  return param1[param2] + param1[param3];
}

function makeCapitalized(param1) {
  return param1.toUpperCase();
}

function yellLouder(param1) {
  return param1.toUpperCase() + '!!!';
}

function getInitials(param1) {
  return param1[0] + '.' + param1[param1.indexOf(' ') + 1] + '.';
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
