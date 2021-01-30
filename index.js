// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) { drivers.push(name); }

function destructivelyPrependDriver(name) { drivers.unshift(name); }

function destructivelyRemoveLastDriver() { drivers.pop(); }

function destructivelyRemoveFirstDriver() { drivers.shift(); }

function appendDriver(name) { const copyOfDriver = [...drivers, name];
return copyOfDriver; } // spread operator functions allows adding new elements but keeping the original 

function prependDriver(name) { const copyOfDrivers = [name, ...drivers ];
return copyOfDrivers}

function removeLastDriver() { const lastDrivers = drivers.slice(0, 2);
return lastDrivers }

function removeFirstDriver() {const firstDrivers = drivers.slice(-2);
return firstDrivers; } 
