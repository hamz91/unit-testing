const functions = require("../src/index");

// test('Addition', function(){
//   const expected = 5;
//   const result = functions.add(2, 3);
//   expect(result).toBe(expected);
// });

// Task 1 - Find Longest String
test("longest string", function() {
  const expected = "Hamzah";
  const result = functions.longString(["hello", "world", "moon", "Hamzah"]);
  expect(result).toBe(expected);
});

// Task-2 -l337

test("l337", function() {
  const expected = "413x";
  const result = functions.replace("alex");
  expect(result).toBe(expected);
});

test("unique strings", function() {
  const expected = ["hello", "hola", "bonvoyauge", "code"];
  const result = functions.uniqueStrings([
    "hello",
    "hola",
    "hello",
    "bonvoyauge",
    "hola",
    "bonvoyauge",
    "code",
    "hola",
    "code"
  ]);
  expect(result).toEqual(expected);
});

test("developer", function() {
  const expected = ["HTML", "CSS", "JS"];

  const jose = new functions.Developer("Jose", ["HTML", "CSS"]);

  jose.learnLanguage("JS");

  const result = jose.languages;

  expect(result).toEqual(expected);
});

test("garden", function() {
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

  const expected = {
    flowers: 5,
    roses: 11,
    sunflowers: 12,
    tulips: 18
  };

  const weed = new functions.Garden(plants);
  weed.plant(plants2);
  weed.harvest(plants3);
  const result = weed;
  expect(result).toEqual(expected);
});

test("concat", function() {
  const expected = "hello world say goodbye";
  const result = functions.stringsConcat([
    "hello",
    2,
    "world",
    5,
    "say",
    7,
    "goodbye"
  ]);
  expect(result).toBe(expected);
});
