class CoffeeMachine {
    static COFFEE_FORMULAS = {
        "espresso": { water: 1, beans: 1, milk: 0, dirtiness: 1 },
        "americano": { water: 2, beans: 1, milk: 0, dirtiness: 2 },
        "latte": { water: 1, beans: 1, milk: 1, dirtiness: 3 },
        "cappuccino": { water: 1, beans: 1, milk: 2, dirtiness: 4 },
      };
  
    static COFFEE_PRICES = {
      "espresso": 1.50,
      "americano": 2.00,
      "latte": 3.00,
      "cappuccino": 3.50,
    };
  
    static COFFEE_INGREDIENTS = {
      "water": 100,
      "beans": 100,
      "milk": 100,
    };
  
    constructor() {
      this.waterLevel = 0;
      this.beanLevel = 0;
      this.milkLevel = 0;
      this.moneyEarned = 0;
      this.dirtiness = 0;
    }

    status() {
        return(`water: ${this.waterLevel},
        beans: ${this.beansLevel},
        milk: ${this.milkLevel},
        money: ${this.moneyEarned},
        dirtiness: ${this.dirtiness}`);
    }

    changePrice(type, price) {
        CoffeeMachine.COFFEE_PRICES[type] = price
        return true;
    }
    addWater(amount) {
      this.waterLevel += amount;
    }
  
    addBeans(amount) {
      this.beanLevel += amount;
    }
  
    addMilk(amount) {
      this.milkLevel += amount;
    }

    cleanMachine() {
        this.dirtiness = 0;
        console.log("cleaned machine");
    }

    makeCoffee(type) {
      if (this.dirtiness >= 10) {
        throw new Error("Coffee machine is too dirty");
      }
      const formula = CoffeeMachine.COFFEE_FORMULAS[type];
      if (this.waterLevel < formula.water || this.beanLevel < formula.beans || this.milkLevel < formula.milk) {
        throw new Error("Not enough ingredients to make the requested coffee.");
      }
  
      const waterAmount = formula.water * CoffeeMachine.COFFEE_INGREDIENTS.water;
      const beanAmount = formula.beans * CoffeeMachine.COFFEE_INGREDIENTS.beans;
      const milkAmount = formula.milk * CoffeeMachine.COFFEE_INGREDIENTS.milk;
  
      this.waterLevel -= formula.water;
      this.beanLevel -= formula.beans;
      this.milkLevel -= formula.milk;
  
      const price = CoffeeMachine.COFFEE_PRICES[type];
      this.moneyEarned += price;
  
      return { coffee: type, change: 0 };
    }
  }
  
