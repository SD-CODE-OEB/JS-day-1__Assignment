//                  Assingment - 1

//Array Operations....

let fruits=[];

//adding three elements to the list.
fruits.push("apple","banana","orange");

//fruits.shift();can be used to delete first element and return it;

//deleting the first element from the list.
fruits.splice(0,1);

//adding an element at end of list.
fruits.push("grape");

//replacing/updating 2nd element of array.
fruits[1]="pear";

//printing final fruits array.
console.log(fruits);

//------------------------------------------------------------------------

//Object Operations...

//creating an object 'person'.
let person={};

//adding properties to the object.
person.name="John";
person.age=30;
person.city="New York";

//removing 'age' property from the object.
delete person.age;

//adding 'job' property to the object 'person'.
person.job="Engineer";

//updating the value of 'city' property.
person.city="San Francisco";

//printing the final object 'person'.
console.log(person);

//------------------------------------------------------------------------

//Array-Object Operations...

//creating empty array 'cars'.
let cars=[];

//adding an object to the array 'cars'.
cars.push({make:"Toyota",model:"Camry",year:2018});

//deleting 'make' property from the  first object in 'cars'.
delete cars[0].make;

//adding another object to the array 'cars'.
cars.push({make:"Honda",model:"civic",year:2020});

//updating the value of 'model' in 2nd object in 'cars'.
cars[1].model="Accord";

//printing the final array 'cars'.
console.log(cars);
