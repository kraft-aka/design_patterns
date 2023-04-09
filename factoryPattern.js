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
const createUser = ({ userName, id, avatar }) => ({
  userName,
  id,
  avatar,
  setUserName(userName) {
    this.userName = userName;
    return this;
  },
});

//console.log(createUser({userName:'Bob', id: 5, avatar:'bob.png'}));

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

// Computed Property Keys
// Earlier we used square bracket computed property access
// notation to dynamically determine which object property to access:

// const key = 'avatar';
// console.log( user[key] ); // "echo.png"

const arrToObj = ([key, value]) => ({ [key]: value });

const arr1 = ["name", "John"];
//console.log(arrToObj(arr1));

// Default Parameters
// Functions in JavaScript support default parameter values, which have
// several benefits:

// Users are able to omit parameters with suitable defaults.
// The function is more self-documenting because default values supply
// examples of expected input.
// IDEs and static analysis tools can use default values to infer the type
// expected for the parameter. For example, a default value of 1 implies that
// the parameter can take a member of the Number type.
// Using default parameters, we can document the expected interface for our
// createUser factory, and automatically fill in 'Anonymous' details if the
// user’s info is not supplied:

const createUser1 = ({
  userName = "AnonymousUser",
  id = 1,
  avatar = "default.png",
} = {}) => ({
  // } = {}) => ({
  userName,
  id,
  avatar,
  setUserName(userName) {
    this.userName = userName;
    return this;
  },
});

//console.log(createUser1());

// The last part of the function signature probably looks a little funny:
// } = {}) => ({
// The last = {} bit just before the parameter signature closes means that
// if nothing gets passed in for this parameter, we’re going to use an empty
// object as the default. When you try to destructure values from the empty
// object, the default values for properties will get used automatically,
// because that’s what default values do: replace undefined with some predefined value.

// Without the = {} default value, createUser() with no arguments would throw
// an error because you can’t try to access properties from undefined

//Type Inference
// Type inference is the process of inferring types based on the context in which
// they are used. In JavaScript, it is a very good alternative to type annotations.

// If you provide enough clues for inference in your standard JavaScript function
// signatures, you’ll get most of the benefits of type annotations with none of the
// costs or risks.

const employees = [];

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      default:
        return "Incorrect input";
    }
  };
}

function displayInfo() {
  console.log (`${this.name} ${this.type}`)
}

const empFactory = new EmployeeFactory();
employees.push(empFactory.create("John", 1));
employees.push(empFactory.create("Dave", 1));
employees.push(empFactory.create("Michael", 2));
employees.push(empFactory.create("Morris", 2));

employees.forEach((emp) => displayInfo.call(emp));
