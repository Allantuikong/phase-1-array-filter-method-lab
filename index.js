// Find Matching Drivers - Case Insensitive
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (collection, name) {
    const lowerCaseName = name.toLowerCase()
    return collection.filter(driver => driver.toLowerCase() === lowerCaseName)
}

const matchingDrivers = findMatching(drivers, "BobBy")
console.log(matchingDrivers)

// Filters Drivers starting with a particular letter
function fuzzyMatch (collection, letter) {
    const lowerCaseLetter = letter.toLowerCase()
    return collection.filter(driver => driver.toLowerCase().startsWith(lowerCaseLetter))
}

const startsWithLetter = fuzzyMatch(drivers, "s")
console.log(startsWithLetter)

// Filters Matching Names
const drivers2 = [
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

function matchName (drivers, name) {
return drivers.filter(driver => driver.name === name)
}
matchName(drivers2, "Sally")