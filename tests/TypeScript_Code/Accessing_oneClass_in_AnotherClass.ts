// Accessing One Class in Another Class in TypeScript

class Engine {
  start(): void {
    console.log("Engine started...");
  }
}

class Car {
  private engine: Engine;  // Declare type

  constructor() {
    this.engine = new Engine(); // Initialize Engine object inside Car
  }

  drive(): void {
    this.engine.start(); // Use Engine's method
    console.log("Car is moving...");
  }
}

const myCar = new Car();
myCar.drive();
