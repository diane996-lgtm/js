
// 1.2.3 - 1.2.6

var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.tuning = true;
car1["number of accidents"] = 0;

car1.driver = new Object();
car1.driver.name = "Diana Kobel";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";


var car2 = {
  color: "blue",
  maxSpeed: 180,
  tuning: false,
  "number of accidents": 2,
  driver: {
    name: "Diana Kobel",
    category: "B",
    "personal limitations": null
  }
};


car1.drive = function() {
  console.log("I am not driving at night");
};
car1.drive();


car2.drive = function() {
  console.log("I can drive anytime");
};
car2.drive();



// 1.2.7 - 1.2.10

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;

  
  this.trip = function() {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      var nightText = this.driver.nightDriving ? "drives at night" : "does not drive at night";
      console.log("Driver " + this.driver.name + " " + nightText + " and has " + this.driver.experience + " years of experience");
    }
  };
}


Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};


var truck1 = new Truck("white", 5000, 80, "Volvo", "FH");
var truck2 = new Truck("black", 6000, 75, "MAN", "TGX");

truck1.AssignDriver("Diana Kobel", true, 5);
truck2.AssignDriver("Diana Kobel", false, 3);

truck1.trip();
truck2.trip();



// 1.2.11 - 1.2.24

class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("Square: quadrilateral with 4 equal sides and 90-degree angles.");
  }

  length() {
    var p = 4 * this.a;
    console.log("Perimeter: " + p);
    return p;
  }

  square() {
    var s = this.a * this.a;
    console.log("Area: " + s);
    return s;
  }

  info() {
    console.log("Square: sides [" + this.a + ", " + this.a + ", " + this.a + ", " + this.a + "], angles [90, 90, 90, 90], perimeter: " + (4 * this.a) + ", area: " + (this.a * this.a));
  }
}

// 1.2.16 - 1.2.17 
class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this._b = b;
  }

  // 1.2.22 
  get a() { return this._a; }
  set a(val) { this._a = val; }
  get b() { return this._b; }
  set b(val) { this._b = val; }

  static help() {
    console.log("Rectangle: opposite sides are equal, all angles are 90 degrees.");
  }

  length() {
    var p = 2 * (this.a + this.b);
    console.log("Perimeter: " + p);
    return p;
  }

  square() {
    var s = this.a * this.b;
    console.log("Area: " + s);
    return s;
  }

  info() {
    console.log("Rectangle: sides [" + this.a + ", " + this.b + ", " + this.a + ", " + this.b + "], angles [90, 90, 90, 90], perimeter: " + (2 * (this.a + this.b)) + ", area: " + (this.a * this.b));
  }
}

// 1.2.18 - 1.2.19 
class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Rhombus: all 4 sides are equal, opposite angles are equal.");
  }

  length() {
    var p = 4 * this.a;
    console.log("Perimeter: " + p);
    return p;
  }

  square() {
    var s = this.a * this.a;
    console.log("Area: " + s);
    return s;
  }

  info() {
    console.log("Rhombus: side " + this.a + ", angles [" + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta + "], perimeter: " + (4 * this.a));
  }
}

// 1.2.20 - 1.2.21 
class Parallelogram extends Rhombus {
  constructor(a, b, alpha, beta) {
    super(a, alpha, beta);
    this.b = b;
  }

  static help() {
    console.log("Parallelogram: opposite sides are parallel and equal.");
  }

  length() {
    var p = 2 * (this.a + this.b);
    console.log("Perimeter: " + p);
    return p;
  }

  square() {
    var s = this.a * this.b;
    console.log("Area: " + s);
    return s;
  }

  info() {
    console.log("Parallelogram: sides [" + this.a + ", " + this.b + ", " + this.a + ", " + this.b + "], angles [" + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta + "], perimeter: " + (2 * (this.a + this.b)));
  }
}

// 1.2.23 
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24 
var sq = new Square(5);
var rect = new Rectangle(4, 6);
var rh = new Rhombus(5, 120, 60);
var par = new Parallelogram(5, 8, 120, 60);

sq.info();
rect.info();
rh.info();
par.info();


// 1.2.25 - 1.2.26
function Triangular(a = 3, b = 4, c = 5) {
  return { a: a, b: b, c: c };
}

console.log(Triangular());
console.log(Triangular(6, 8, 10));
console.log(Triangular(7, 7, 7));



// 1.2.27 - 1.2.28

function PiMultiplier(num) {
  return function() {
    return Math.PI * num;
  };
}

var f1 = PiMultiplier(2);
var f2 = PiMultiplier(2 / 3);
var f3 = PiMultiplier(0.5);

console.log(f1());
console.log(f2());
console.log(f3());



// 1.2.29 - 1.2.31: Painter

function Painter(color) {
  return function(obj) {
    if (obj.type) {
      console.log("Color: " + color + ", type: " + obj.type);
    } else {
      console.log("No 'type' property occurred!");
    }
  };
}

var PaintBlue = Painter("blue");
var PaintRed = Painter("red");
var PaintYellow = Painter("yellow");

var o1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
var o2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
var o3 = { maxSpeed: 180, color: "purple", isCar: true };

PaintBlue(o1);
PaintRed(o1);
PaintYellow(o1);

PaintBlue(o2);
PaintRed(o2);
PaintYellow(o2);

PaintBlue(o3);
PaintRed(o3);
PaintYellow(o3);