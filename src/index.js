function longString(arr) {
  let string = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return string[0];
}
exports.longString = longString;

const myObject = {
  i: 1,
  l: 1,
  e: 3,
  s: 5,
  a: 4,
  g: 6,
  t: 7,
  y: 7,
  b: 8,
  q: 9,
  o: 0
};

function replace(string) {
  let arr = [...string].map(function(item) {
    return typeof myObject[item] === "number" ? myObject[item] : item;
  });
  return arr.join("");
}

exports.replace = replace;

function uniqueStrings(arr) {
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

exports.uniqueStrings = uniqueStrings;

function Developer(name, languages) {
  this.name = name;
  this.languages = languages;
}
const jose = new Developer("Jose", ["HTML", "CSS"]); // Instance
Developer.prototype.learnLanguage = function(newLanguage) {
  if (typeof newLanguage === "string") {
    this.languages.push(newLanguage);
    this.languages = uniqueStrings(this.languages);
  } else {
    console.log("Please enter a string");
  }
};
exports.Developer = Developer;

const plants = {
  roses: 12,
  tulips: 8,
  marijuana: 420,
  sunflowers: 14
};

const plants2 = {
  roses: 2,
  tulips: 12,
  sunflowers: 6,
  flowers: 5
};

const plants3 = {
  roses: 3,
  tulips: 2,
  marijuana: 420,
  sunflowers: 8
};

function Garden(stock) {
  Object.keys(stock).forEach(item => {
    this[item] = stock[item];
  });
}

let greenhouse = new Garden(plants);
console.log(greenhouse);

Garden.prototype.plant = function(plantsAdded) {
  Object.keys(plantsAdded).forEach(item => {
    this[item] && plantsAdded[item] > 0
      ? (this[item] += plantsAdded[item])
      : (this[item] = plantsAdded[item]);
  });
};

greenhouse.plant(plants2);
console.log(greenhouse);

Garden.prototype.harvest = function(plantsHarvested) {
  Object.keys(plantsHarvested).forEach(key => {
    if (!this[key]) {
      return console.log("We do not have that plant");
    }

    this[key] -= plantsHarvested[key];
    if (this[key] <= 0) {
      delete this[key];
    }
  });
};

greenhouse.harvest(plants3);
console.log(greenhouse);

exports.Garden = Garden;

function stringsConcat(arr) {
  let newArr = [];
  arr.map(function(item) {
    if (typeof item != "number") {
      newArr.push(item);
    }
  });
  return newArr.join(" ");
}

exports.stringsConcat = stringsConcat;
