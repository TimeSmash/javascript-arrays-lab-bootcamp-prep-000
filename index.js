var kittens = ["Milo", "Otis", "Garfield"] ;

// Add your functions and code here

function destructivelyAppendKitten (element) {
  var appendKitty = kittens.push(element)
return appendKitty;
}

function destructivelyPrependKitten(element) {
  var prependKitty = kittens.unshift(element);
  return prependKitty;
}

function destructivelyRemoveLastKitten() {
var popKitten = kittens.pop();
return popKitten;
}

function destructivelyRemoveFirstKitten() {
  var pushKitten = kittens.shift();
  return pushKitten;
}

function appendKitten(element) {
  var appKittySpread = 
}