// class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let user = new Person('Apple', 1);
user.greet();

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}
let u1 = new User('Cat');
u1.sayHi();

console.log(typeof User); //function

//***************************** Inheritance ********************************** */
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
  sing() {
    console.log('its singing');
  }
}

class Dog extends Animal {
  constructor(name) {
    //super points to parent class
    super(name);
  }
}

let d = new Dog('Rufus');
d.speak();
d.sing();

// *************************** static ****************************
// methods and variables can be static
class Animals {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes noise`);
  }

  static sing() {
    console.log(`it's singing`);
  }
}

Animals.sing(); //static method can be accessed using className.methodName()
//we cannot call using object

class Game {
  static score = 0;
  constructor() {
    this.isPlaying = false;
  }
  start() {
    this.isPlaying = true;
    console.log('the game has started');
  }
  end() {
    this.isPlaying = false;
    console.log('the game is ended');
    Game.updateScore();
  }

  static updateScore() {
    Game.score++;
    console.log(`Score : ${Game.score}`);
  }
}

const game = new Game();
game.start();
game.end();
