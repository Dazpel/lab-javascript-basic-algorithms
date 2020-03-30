let hacker1 = 'Jonah';
console.log(`the driver's name is ${hacker1}`);

let hacker2 = 'Hanoj';
console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log('What?! You both have the same name?');
}

// Iteration 3: Loops

function capitals(word) {
  let driverName = [];

  for (let i = 0; i <= word.length - 1; i++) {
    driverName.push(word[i].toUpperCase());
  }

  let joinedName = driverName.join(' ');
  console.log(joinedName);
}

capitals(hacker1);

let navigatorReverse = [];

for (i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverse.push(hacker2[i]);
}

console.log(navigatorReverse.join(''));

function compareLexi (a, b) {


    if (a.localeCompare(b) === 1) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("The driver's name goes first.")
    }

}

compareLexi(hacker1, hacker2)