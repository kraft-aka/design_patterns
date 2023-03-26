// Factory Pattern Eric Elliot Medium JavaScript Factory Functions with ES6+

// A factory function is any function which is not a class or constructor
// that returns a (presumably new) object. In JavaScript, any function can
// return an object. When it does so without the new keyword, it’s a factory function.

// Factory functions have always been attractive in JavaScript because they
// offer the ability to easily produce object instances without diving into
// the complexities of classes and the new keyword


const userName = "John";
const id = 1;
const avatar = "img.png";

// const user = {
//   userName,
//   id,
//   avatar,

//   setUserName (userName) {
//     this.userName = userName
//     return this
//   }
// };

// factory function
const createUser = ({userName, id, avatar}) => ({
  userName,
  id,
  avatar,
  setUserName(userName) {
    this.userName = userName
    return this;
  }
})


console.log(createUser({userName:'Bob', id: 5, avatar:'bob.png'}));

// Arrow functions (=>) have an implicit return feature: if the function body ''
// consists of a single expression, you can omit the 
// return keyword: () => 'foo' is a function that takes no parameters, and returns 
// the string, "foo".

// Be careful when you return object literals. By default, JavaScript assumes you 
// want to create a function body when you use braces, e.g., { broken: true }. 
// If you want to use an implicit return for an object literal, you’ll need to 
// disambiguate by wrapping the object literal in parentheses:

// const noop = () => { foo: 'bar' };
// console.log(noop()); // undefined
// const createFoo = () => ({ foo: 'bar' });
// console.log(createFoo()); // { foo: "bar" }
// In the first example, foo: is interpreted as a label, and bar 
// is interpreted as an expression that doesn’t get assigned or returned. 
// The function returns undefined.

// In the createFoo() example, the parentheses force the braces to be 
// interpreted as an expression to be evaluated, rather than a function body block.

// Destructuring
// Pay special attention to the function signature:

// const createUser = ({ userName, avatar }) => ({
// In this line, the braces ({, }) represent object destructuring. 
// This function takes one argument (an object), but destructures two 
// formal parameters from that single argument, userName, and avatar. 
// Those parameters can then be used as variables in the function body scope. 

