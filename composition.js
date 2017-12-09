function mul(x) {
  return function(y) {
    // anonymous function
    return function(z) {
      // anonymous function
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

//The mul function accepts the first argument and returns an anonymous function,
//which takes the second parameter and returns another anonymous function that will take the third parameter
// and return the multiplication of the arguments that have been passed.
