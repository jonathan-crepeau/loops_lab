// console.log('Fear is the mind killer.');

// ANCHOR Loop Lab Exercises

// SECTION Exercise #1: Write a for loop that will iterate from 50 to 20. If the element's index number is a multiple of 3, log the value.

// for (let i = 50; i > 19; i--) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }


// SECTION Exercise #3: Loop through the array below and print every OTHER value, starting with the second:

// const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];

// for (let i=0; i < presidents.length; i+=2) {
//   console.log(presidents[i])
// }


// SECTION Exercise #4: Create a new array with the gluten-free options from this menu:

// const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

// const gfMenu = [];

// for (let i = 0; i < menu.length; i++) {
//   if (menu[i].glutenFree === true) {
//     gfMenu.push(menu[i]);
//   }
// }
// console.log(gfMenu);


// Exercise #5: Loop through the mixedArray below and push the items that are NOT numbers into a seperate array:

// const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]

// const notNumbers = [];

// for (let i = 0; i < mixedArray.length; i++) {
//   // console.log(mixedArray[i] + ' typeof: ' + typeof mixedArray[i]);

//   if (typeof mixedArray[i] != 'number') {
//     notNumbers.push(mixedArray[i]);
//     mixedArray.splice(mixedArray.indexOf(mixedArray[i]), 1);
//     i--;
//   }
// }

// console.log(mixedArray);
// console.log('-------------');
// console.log(notNumbers);


// SECTION Exercise # 6: Create a new array with all the players hat have a true value of goat from each league:

// const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]

// const goatPlayers = [];

// for (let i = 0; i < league.length; i++) {
//   for (let y = 0; y < league[i].players.length; y++) {
//     if (league[i].players[y].goat === true) {
//       goatPlayers.push(league[i].players[y]);
//     }
//     console.log(league[i].players[y]);
//   }
// }
// console.log(goatPlayers);