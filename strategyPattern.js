// Stratefy design pattern.
// The Strategy pattern is a behavioral design pattern that enables
// you to define a group (or family) of closely-related algorithms (known as strategies).
// The strategy pattern allows you to swap strategies in and out for each other as
// needed at runtime.

// factory functions
function Telekom() {
  this.calculate = (offer) => {
    return 20.0;
  };
}

function OTwo() {
  this.calculate = (offer) => {
    return 25.0;
  };
}

function WinSim() {
  this.calculate = (offer) => {
    return 18.0;
  };
}

// strategy function
function Contract() {
  this.provider = "";
  this.setStrategy = (provider) => (this.provider = provider);
  this.calculate = (offer) => this.provider.calculate(offer);
}

// init instances
const telekom = new Telekom();
const oTwo = new OTwo();
const winsim = new WinSim();

const offer = { tarif: "Unlimited", calls: "All Free", speed: "high" };

const contract = new Contract();
contract.setStrategy(telekom);
console.log(`Telekom: ${contract.calculate(offer)} Euro.`);
contract.setStrategy(oTwo);
console.log(`O2: ${contract.calculate(offer)} Euro.`);
contract.setStrategy(winsim);
console.log(`Winsim: ${contract.calculate(offer)} Euro.`);
