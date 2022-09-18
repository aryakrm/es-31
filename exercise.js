function sayHelloName(callback) {
  console.log("Hello");
  callback();
}
function printName() {
  console.log("Arya");
}

sayHelloName(printName);
