/******************
 * YOUR CODE HERE *
 ******************/

const triple = function(num) {
  return num *3}

  const tripleAll = function(numb){
    return numb.map(triple)

  }
const getNegativeValue = function(posOrNeg){
  const arr = []
  return  'positive' ? arr == 0 : posOrNeg
  
}

const negativeValues = function(num){
  
return num.map(getNegativeValue)
}

const makeQuestion = function(val){
  return val + "?"
}

const questionings = function(val){
  return val.map(makeQuestion)
}

const changeToInitials = function(names){
  return names.map(getInitials)
}

const getInitials = function(init){
  return init[0] + init[init.indexOf(' ') + 1];
}

const doubleIfEven = function(num){
  if (num % 2 === 0){
    return num * 2
  } else {
    return num
  }
}

const doubleEven = function(numbers){
  return numbers.map(doubleIfEven);
};
/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
