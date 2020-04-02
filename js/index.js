let hacker1 = 'Jonah';
console.log(`the driver's name is ${hacker1}`);

let hacker2 = 'zHanoj';
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

function compareLexi(a, b) {
  if (a.localeCompare(b) === 1) {
    console.log('Yo, the navigator goes first definitely.');
  } else {
    console.log("The driver's name goes first.");
  }
}

compareLexi(hacker1, hacker2);

function countMatches() {
  let ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque est sit amet ligula ullamcorper pellentesque. Suspendisse placerat, lectus eget pellentesque suscipit, neque augue tempus justo, vel venenatis nisi lorem ac leo. Donec posuere, felis ut consectetur finibus, tellus sem eleifend dolor, ut faucibus turpis nulla id nunc. In feugiat eros at dolor condimentum faucibus. Duis neque elit, tincidunt quis lectus a, consectetur varius arcu. Fusce metus lacus, faucibus sit amet felis et, placerat mattis leo. Suspendisse eget finibus quam, sed lacinia odio. Aliquam erat volutpat. Donec quis consequat urna. Etiam lacinia pharetra mi, a scelerisque arcu sollicitudin ullamcorper. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ultricies felis mauris, dictum maximus mauris imperdiet nec. Curabitur a bibendum lacus. Phasellus efficitur porta iaculis. Integer venenatis tortor non enim facilisis condimentum.

    Cras vehicula a erat vel aliquet. Quisque quis ante at felis varius tincidunt. Phasellus ut velit vulputate, suscipit mi eget, lacinia mi. Proin gravida ut orci eget gravida. In a nisl condimentum, vestibulum erat eu, pellentesque nibh. Suspendisse convallis aliquet nunc, a iaculis lorem. Aenean dictum nunc id metus pulvinar convallis sit amet in felis. Curabitur pharetra ex et diam molestie dapibus. Quisque purus turpis, fermentum sit amet augue a, ultricies blandit tellus. Nam dictum, quam quis pulvinar suscipit, sem lectus aliquet sapien, eget porta odio arcu vel mauris. Integer vulputate orci sagittis, vestibulum urna faucibus, pharetra quam. Quisque massa tortor, lobortis sit amet blandit sed, porttitor tempus ex. Nunc sit amet nisi pretium, maximus eros eu, faucibus odio. Aliquam quis blandit dolor.
    
    Cras et vulputate elit, in dignissim velit. Integer vehicula arcu at odio consectetur pharetra. Cras eget ligula sed sem posuere faucibus. Donec tellus lectus, scelerisque quis lacus ut, fringilla molestie odio. Curabitur malesuada congue felis eu porttitor. Duis non massa non dui finibus tempus. Etiam ut neque non tellus bibendum venenatis et quis leo. Phasellus quis ante hendrerit, pharetra neque et, euismod purus. Etiam blandit sit amet lectus a sodales. In condimentum est felis, id rhoncus tortor scelerisque et. Donec quis orci lacus. Nunc iaculis velit ut ipsum porttitor, vitae fringilla odio volutpat. Mauris elementum, nunc vitae efficitur tristique, justo leo aliquam enim, quis bibendum nunc nisl quis lectus. Sed tempus bibendum mi et rutrum.`;

  let count = ipsum.match(/et/g).length;
  console.log(count);
}

countMatches();

let arrayPal = [
  'A man, a plan, a canal, Panama!',
  'Amor, Roma',
  'race car',
  'stack cats',
  'step on no pets',
  'taco cat',
  'put it up',
  'Was it a car or a cat I saw?',
  "No 'x' in Nixon"
];

function checkPal(s) {
  return (
    s ==
    s
      .split('')
      .reverse()
      .join('')
  );
}

for (i = 0; i <= arrayPal.length - 1; i++) {
  console.log(checkPal(arrayPal[i]));
}

function positiveSum(arr) {
  let sum = 0;
  arr.map(x => {
    if (x > 0) {
      sum += x;
    }
  });
  return sum;
}
