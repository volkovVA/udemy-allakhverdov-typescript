const colors2: string[] = ['red', 'green', 'yellow'];

const dates = [new Date(), new Date()];

const fruitsByColor = [['tomato'], ['apple'], ['lemon']];

const fruitsByColor2: string[][] = [];

// Help with inference when extraction values
const color = colors2[0];
const color2 = colors.pop();

// Prevent incompatible values
// colors2.push(true);

// Help with 'map'
colors2.map((color: string): string => {
  return color.toLocaleUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2022-03-20');
