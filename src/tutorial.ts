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

//* FUNCTIONS Union Types CHALLENGE
//Create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
//If the input is of type number, the function should multiply the number by 2 and log the result to the console.
//If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10); // Output: 20
processInput("Hello"); // Output: HELLO

//* Functions - Using Objects as Function Parameters
//? Create a function named processData that accepts two parameters:
//The first parameter, input, should be a union type that can be either a string or a number.
//The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false.
//? The function should behave as follows:
//If input is of type number, the function should return the square of the number.
//If input is of type string, the function should return the string in uppercase.
//If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
  ): string | number {
    if (typeof input === 'number') {
      return input * input;
    } else {
      return config.reverse
        ? input.toUpperCase().split('').reverse().join('')
        : input.toUpperCase();
    }
  }
  
  console.log(processData(10)); // Output: 100
  console.log(processData('Hello')); // Output: HELLO
  console.log(processData('Hello', { reverse: true })); // Output: OLLEH

//* Alias
//Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).
//Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
//Create a Union Type: Define a type Staff that is a union of Employee and Manager.
//Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.
//Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.
//Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob);

//* Intersection Types
//Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
//Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
//Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
//Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
//Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
//Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
//Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

interface Computer {
    readonly id: number; // cannot be changed once initialized
    brand: string;
    ram: number;
    upgradeRam(increase: number): number;
    storage?: number; // optional property
  }
  
  const laptop: Computer = {
    id: 1,
    brand: 'random brand',
    ram: 8, // in GB
    upgradeRam(amount: number) {
      this.ram += amount;
      return this.ram;
    },
  };
  
  laptop.storage = 256; // assigning value to optional property
  
  console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB
  console.log(laptop);