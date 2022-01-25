// ************************ design patern ************************

// ===================== Singleton =====================
// let instance;

// class Counter {
//   constructor() {
//     if (!instance) instance = this;
//     return instance;
//   }
// }

// class Counter {
//   // constructor() {
//   //   if (!instance) instance = this;
//   //   instance.count = 0;
//   //   return instance;
//   // }

//   // getCount() {
//   //   return instance.count;
//   // }

//   // increaceCount() {
//   //   return instance.count++;
//   // }

//   constructor() {
//     if (typeof Counter.instance === "object") {
//       return Counter.instance;
//     }
//     this.count = 0;
//     Counter.instance = this;
//     return this;
//   }

//   getCount() {
//     return this.count;
//   }

//   increaceCount() {
//     return this.count++;
//   }

//   dicriesCount() {
//     return (this.count -= 1);
//   }
// }

// const firstCounter = new Counter();
// const secondCounter = new Counter();

// firstCounter.increaceCount();
// firstCounter.increaceCount();
// secondCounter.increaceCount();
// secondCounter.increaceCount();
// secondCounter.increaceCount();

// secondCounter.dicriesCount();
// secondCounter.dicriesCount();

// console.log(firstCounter.getCount());
// console.log(secondCounter.getCount());
// ===================== Singleton =====================

// ===================== Factory method =====================
// class AudiFactori {
//   create(type) {
//     if (type === "a4") {
//       return new Audi("a4", 50000, 240);
//     }
//     if (type === "a6") {
//       return new Audi("a4", 10000, 260);
//     }
//   }
// }

// class Audi {
//   constructor(model, price, speed) {
//     this.model = model;
//     this.price = price;
//     this.speed = speed;
//   }
// }

// const Factory = new AudiFactori();

// const a4 = Factory.create("a4");
// const a6 = Factory.create("a6");

// console.log(a4);
// console.log(a6);
// ===================== Factory method =====================

// // ===================== Abstract factory =====================
// function audiProducer(carType) {
//   switch (carType) {
//     case "sport":
//       return sportCarFactory;

//     case "premium":
//       return premiumCarFactory;

//     case "famaly":
//       return famalyCarFactory;
//   }

//   //   return carType === "sport" ? sportCarFactory : famalyCarFactory;
// }

// function sportCarFactory() {
//   return new Rs8();
// }

// function premiumCarFactory() {
//   return new A6();
// }

// function famalyCarFactory() {
//   return new S4();
// }

// class Rs8 {
//   constructor() {
//     this.price = 130000;
//     this.speed = 300;
//     this.description = "the best of sport car";
//   }

//   info() {
//     return `audi RS-8 , price: ${this.price}, max-speed: ${this.speed}, it ${this.description} `;
//   }
// }

// class A6 {
//   constructor() {
//     this.price = 150000;
//     this.speed = 260;
//     this.description = "the best premium car";
//   }

//   info() {
//     return `audi s6 , price: ${this.price}, max-speed: ${this.speed}, it ${this.description} `;
//   }
// }

// class S4 {
//   constructor() {
//     this.price = 40000;
//     this.speed = 220;
//     this.description = "the best famaly car";
//   }

//   info() {
//     return `audi s4 , price: ${this.price}, max-speed: ${this.speed}, it ${this.description} `;
//   }
// }

// const produceSportCar = audiProducer("sport");
// const mySportCar = new produceSportCar();
// console.log(mySportCar.info());

// const producePremium = audiProducer("premium");
// const myPremium = new producePremium();
// console.log(myPremium.info());

// const produceFamalyCar = audiProducer("famaly");
// const myFamalyCar = new produceFamalyCar();
// console.log(myFamalyCar.info());
// // ===================== Abstract factory =====================

// ===================== Prototype =====================
// class TeslaCar {
//   constructor(model, price, interior, autopilot) {
//     this.model = model;
//     this.price = price;
//     this.interior = interior;
//     this.autopilot = autopilot;
//   }

//   produce() {
//     return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
//   }
// }

// const prototypeCar = new TeslaCar("model S", 100000, "white", false);

// const car1 = prototypeCar.produce();
// const car2 = prototypeCar.produce();

// car1.autopilot = true;

// car2.price = 80000;
// car2.interior = "black";

// console.log(car1);
// console.log(car2);
// ===================== Prototype =====================

// ===================== Builder =====================

// class Car {
//   constructor() {
//     this.autopilot = false;
//     this.parctronic = false;
//     this.signaling = false;
//   }
// }

// class CarBuilder {
//   constructor() {
//     this.Car = new Car();
//   }

//   addAutopilot(autopilot) {
//     this.Car.autopilot = autopilot;
//     return this;
//   }

//   addParctronic(parctronic) {
//     this.Car.parctronic = parctronic;
//     return this;
//   }

//   addSignaling(signaling) {
//     this.Car.signaling = signaling;
//     return this;
//   }

//   updateEngine(engine) {
//     this.Car.engine = engine;
//     return this;
//   }

//   build() {
//     return this.Car;
//   }
// }

// const myCar = new CarBuilder()
//   .addAutopilot(true)
//   .addParctronic(true)
//   .updateEngine("v8")
//   .build();

// const carForMyFriend = new CarBuilder()
//   .addAutopilot(false)
//   .addParctronic(false)
//   .addSignaling(true)
//   .updateEngine("v6")
//   .build();
// console.log("myCar", myCar);
// console.log("carForMyFriend", carForMyFriend);
// ===================== Builder =====================

// ===================== Decorator =====================
// class Car {
//   constructor() {
//     this.price = 30000;
//     this.model = "car";
//   }

//   getPrice() {
//     return this.price;
//   }

//   getDescription() {
//     return this.model;
//   }
// }

// class Bmw extends Car {
//   constructor() {
//     super();
//     this.price = 120000;
//     this.model = "x5";
//   }
// }

// class Mazda extends Car {
//   constructor() {
//     super();
//     this.price = 80000;
//     this.model = "cx-7";
//   }
// }
// ////////////decorators
// class Autopilote {
//   constructor(car) {
//     this.car = car;
//   }

//   getPrice() {
//     return this.car.getPrice() + 5000;
//   }

//   getDescription() {
//     return `${this.car.getDescription()} with autopilot`;
//   }
// }

// class Parctronic {
//   constructor(car) {
//     this.car = car;
//   }

//   getPrice() {
//     return this.car.getPrice() + 3000;
//   }

//   getDescription() {
//     return `${this.car.getDescription()} with parctronic`;
//   }
// }

// class Signaling {
//   constructor(car) {
//     this.car = car;
//   }

//   getPrice() {
//     return this.car.getPrice() + 1000;
//   }

//   getDescription() {
//     return `${this.car.getDescription()} with signaling`;
//   }
// }

// let bmw = new Bmw();
// bmw = new Autopilote(bmw);
// bmw = new Parctronic(bmw);
// bmw = new Signaling(bmw);

// console.log(bmw.getPrice(), bmw.getDescription());

// let mazda = new Mazda();
// mazda = new Autopilote(mazda);
// mazda = new Parctronic(mazda);
// mazda = new Signaling(mazda);

// console.log(mazda.getPrice(), mazda.getDescription());

// ===================== Decorator =====================

// ************************ design patern ************************
