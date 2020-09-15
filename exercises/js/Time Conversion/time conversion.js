// take a string of time and convert it to military time

let str = '12:01:00PM'

const toMilitaryTime = (str) => {
  //first split string by colons
  const splitNumbers = str.split(":");
  //next split seconds and chars
  const splitChars = splitNumbers[2].slice(Math.max(splitNumbers.length - 5, 0));
  console.log(splitNumbers);
  console.log(typeof(splitChars));
}

toMilitaryTime(str);