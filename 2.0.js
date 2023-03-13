// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

class CoffeeMachine {
  static coffeeFormulas = {
    "espresso": {"water": 250, "milk": 0, "coffeeBeans": 16},
    "latte": {"water": 350, "milk": 75, "coffeeBeans": 20},
    "cappuccino": {"water": 200, "milk": 100, "coffeeBeans": 12}
  };
  
  static COFFEE_PRICES = {
      "espresso": 4,
      "latte": 7,
      "cappuccino": 6
    };
  
  static numberToCoffee = {
    "1": "espresso",
    "2": "latte",
    "3": "cappuccino"
  };

  information() {
    return(`The coffee machine has:
${this.water} ml of water
${this.milk} ml of milk
${this.coffeeBeans} g of coffee beans
${this.disposable} disposable cups
$${this.money} of money`);
  }
  
  take() {
    console.log(`I gave you $${this.money}`);
    this.money = 0;
    console.log(this.information());
  }

  fill() {
    let water = input("Write how many ml of water you want to add: ");
    let milk = input("Write how many ml of milk you want to add: ");
    let coffeeBeans = input("Write how many grams of coffee beans you want to add: ");
    let disposable = input("Write how many disposable cups you want to add: ");
    this.water += Number(water);
    this.milk += Number(milk);
    this.coffeeBeans += Number(coffeeBeans);
    this.disposable += Number(disposable);
    
    console.log(this.information());
  }

  buy() {
    let type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ")
    let coffee = CoffeeMachine.numberToCoffee[type];
    let price = CoffeeMachine.COFFEE_PRICES[coffee];
    let water = CoffeeMachine.coffeeFormulas[coffee]["water"];
    let milk = CoffeeMachine.coffeeFormulas[coffee]["milk"];
    let coffeeBeans = CoffeeMachine.coffeeFormulas[coffee]["coffeeBeans"];
    this.money += Number(price);
    this.water -= Number(water);
    this.milk -= Number(milk);
    this.coffeeBeans -= Number(coffeeBeans);
    this.disposable -= 1
    console.log(this.information());
  }
  
  constructor() {
    this.water = 400
    this.milk = 540
    this.coffeeBeans = 120
    this.disposable = 9
    this.money = 550
    console.log(this.information());
  }
}

let machine = new CoffeeMachine();
answer = input("Write action (buy, fill, take): ")
switch(answer) {
  case "buy":
       machine.buy();
       break;
  case "fill":
       machine.fill();
       break;
  case "take":
       machine.take();
       break;
}
