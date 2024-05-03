console.log("this is tutorial");

let awesomeName: string = "Fernando";
awesomeName = "Emilio";
awesomeName = awesomeName.toUpperCase();

//* FUNCTIONS CHALLENGE
//Create a new array of names.
//Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
//Use this function to check if various names are in your array and log the results.

const names: string[] = ["Fernando", "Emilio", "Cantora"];

const isInArray = (name: string): boolean => {
  return names.includes(name);
};

let nameToCheck: string = "Emilio";

if (isInArray(nameToCheck)) {
  console.log(`${nameToCheck} is in the array`);
} else {
  console.log(`${nameToCheck} is not in the array`);
}


