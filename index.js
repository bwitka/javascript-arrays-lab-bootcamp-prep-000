// Add your functions and code here

//Note: "append" means "to add at the end".
//Note: "prepend" means "to add at the beginning".

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

/*function appendKitten(name) {
  kittens.slice(1);
  return kittens;
}

function prependKitten(name) {
  kittens.(name);
  return kittens;
}

function removeLastKitten() {
  kittens.(name);
  return kittens;
}*/

function removeFirstKitten() {
  kittens.slice(1);
  return kittens;
}