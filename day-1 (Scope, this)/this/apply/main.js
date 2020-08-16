// // EXERCISES 1-4 (MUST)
// // link: https://kernel.elevation.ac/cohorts/53/lessons/59/apply/activity/4

// //EXERCISE 1 
// const person = {
//     hungry: true,

//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }

//   person.feed() //should alert "I'm no longer hungry"



// // EXERCISE 2
// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);



// //EXERCISE 3
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };

//   const airplane = {
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     },
//     fuel: 1
//   };

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());



// //EXERCISE 4


// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//         this.coinCount += 1;
//     },
//     stealCoins: function (num){
//         this.coinCount -=  num
//     }
//   };

//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);




// EXERCISES 5-6 (CHALLENGING)
// link: https://kernel.elevation.ac/cohorts/53/lessons/59/apply/activity/4

// //EXERCISE 5
// const revealSecret = function () {
//     return this.secret;
//   };

//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);

//   };

//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };

//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);


//EXERCISE 6
const coffeeShop = {
  beans: 40,

  // drinkRequirements: {
  //   latte: 10,
  //   americano: 5,
  //   doubleShot: 15,
  //   frenchPress: 12
  // },
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 2.5 },
    doubleShot: { beanRequirement: 15, price: 7.5 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },
  money: 100,

  makeDrink: function (drinkType) {
    // TODO: Finish this method

    // if the drink is not in the coffeeShop's drinkRequirements list:
    if (!this.drinkRequirements[drinkType]) {
      console.log(`We don't make ${drinkType}`)
      return false;
    }
    // checking if the drinkType is in the coffeeShop's drinkRequirements list , AND if there are enough beans to make that drink:
    if (this.beans - this.drinkRequirements[drinkType].beanRequirement > -1) {
      console.log(this.drinkRequirements[drinkType])
      this.beans -= this.drinkRequirements[drinkType].beanRequirement
      console.log(`Here is your ${drinkType} =].`)

      // if there aren't enough beans to make that drink:
    } else if (this.beans - this.drinkRequirements[drinkType].beanRequirement <= 0) {
      console.log(`Sorry, we don't have enough beans left to make ${drinkType} =[.`)
    }

  }, buyBeans: function (investment) {
    let beansPrice = 15;
    if (money >= beansPrice) {
      this.money - investment
      this.beans += 10;
    }
  }, buyDrink(drinkType) {
    this.money += this.drinkRequirements[drinkType]
    this.makeDrink(drinkType)
  }
}

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
