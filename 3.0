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
    console.log(`The coffee machine has:
${this.water} ml of water
${this.milk} ml of milk
${this.coffeeBeans} g of coffee beans
${this.disposable} disposable cups
$${this.money} of money`);
  }
  
  take() {
    console.log(`I gave you $${this.money}`);
    this.money = 0;
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
    
  }

  buy() {
    let type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ")
    if (type === "back") {
      return;
    }
    let coffee = CoffeeMachine.numberToCoffee[type];
    let check = this.checkIngredients(coffee);
    if (check === 1) {
      console.log("I have enough resources, making you a coffee!")
      let price = CoffeeMachine.COFFEE_PRICES[coffee];
      let water = CoffeeMachine.coffeeFormulas[coffee]["water"];
      let milk = CoffeeMachine.coffeeFormulas[coffee]["milk"];
      let coffeeBeans = CoffeeMachine.coffeeFormulas[coffee]["coffeeBeans"];
      this.money += Number(price);
      this.water -= Number(water);
      this.milk -= Number(milk);
      this.coffeeBeans -= Number(coffeeBeans);
      this.disposable -= 1
    } else {
      console.log(check)
    }
  }

  checkIngredients(coffeeType) {
  
   if (CoffeeMachine.coffeeFormulas[coffeeType]['water'] > this.water) {
    return "Sorry, not enough water!";
  }
   if (CoffeeMachine.coffeeFormulas[coffeeType]['milk'] > this.milk) {
    return "Sorry, not enough milk!";
  }
   if (CoffeeMachine.coffeeFormulas[coffeeType]['coffeeBeans'] > this.coffeeBeans) {
    return "Sorry, not enough coffee beans!";
  }
   if (1 > this.disposable) {
    return "Sorry, not enough disposable cups";
  }
  
   return 1;
}
  
  constructor() {
    this.water = 400
    this.milk = 540
    this.coffeeBeans = 120
    this.disposable = 9
    this.money = 550
  }
}

let machine = new CoffeeMachine();
while (true) {
      answer = input("Write action (buy, fill, take, remaining, exit): ")
      let quit = false;
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
        case "remaining":
          machine.information();
          break;
        case "exit":
          quit = true;
          break;
     }
     if (quit) 
        break;
}
