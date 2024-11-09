// Closures

function greeting(type) {
  return function (user) {
    console.log(`${type} to outer user ${user}!`);
  };
}

const welcome = greeting("welcome");
welcome("Ali");
welcome("Mario");

const hello = greeting("Hello");
hello("Ali");
hello("sara");
