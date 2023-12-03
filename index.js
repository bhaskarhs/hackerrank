class Learner {
    #name;
    #age;
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
    get learnerName() {
      return this.name;
    }
  }
  
  let Derek = new Learner('Derek', '22');
  console.log(Derek.learnerName);

  (function outer(x) {
    return (function inner(y) {
      console.log(x);
    })(23);
  })(24);

  class Phone {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
    get getModel() {
      return this.model;
    }
    getBrand() {
      return this.brand;
    }
  }
  
  let foxPhone = new Phone('BlackFox', 'XT25');
  
  console.log(foxPhone.getModel);
  console.log("brand",foxPhone.getBrand);

  let addNum = (x, y) => x + y;
let mult3 = (fn) => (x, y) => fn(x * 3, y * 3);
let addNumMult = mult3(addNum);
console.log(addNumMult(10, 20));

let x = 25;
function outer(x) {
  return function inner() {
    console.log(x);
  };
}

let getClosure = outer(20);
getClosure(26); //output is 20 this explains the clouser


function computeTax(rate = 10) {
    let tax = rate;
    return function (cost) {
      return (tax / 100) * cost;
    };
  }
  
  let tax = computeTax(12);
  
  console.log(tax(200));  //ans is 24 this explains the higherorderfunction