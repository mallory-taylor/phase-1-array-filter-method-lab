const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// findMatching
// array of drivers names and string as arguments
// return matching list of drivers 
// case insensitive

function findMatching(collection, string) {
    return collection.filter(user => user.toLowerCase() === string.toLowerCase());
}
findMatching(drivers, "Bobby")

// This function takes an array of drivers' names and a string as arguments for querying the array
// returns all drivers whose names begin with the provided letters.

function fuzzyMatch(collection, string) {
    return collection.filter(user => user.substring(0, 2) === string.substring(0, 2));
}
fuzzyMatch(drivers, "Sa");

// This function takes an array of driver objects and a string as arguments. 
// Each driver object has two properties: name and hometown. 
// The function should return each element whose name property matches the provided string argument.

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(collection, string) {
    return collection.filter(user => user.name === string);
  }
  matchName(driversObj, "name");