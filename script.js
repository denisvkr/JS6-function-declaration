/*JavaScript ES6: ways to declare arrow functions:*/

const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
};

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

const volumeOfSphere = diameter =>
  (1/6) * Math.PI * diameter * diameter * diameter;

console.log(`The volume of a sphere is ${volumeOfSphere(10)} cubic centimeters`);