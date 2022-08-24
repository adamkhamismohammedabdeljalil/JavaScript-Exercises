class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  // ...
  static calculate(area){
    if(area===square){
      
      return console.log(square.side*square.side)
    }
    else if(area===rectangle){
      console.log(rectangle.width*rectangle.height)
    }
    else if(area===circle){
      console.log(Math.PI*circle.radius**2)
    }
    else{
      console.log(`Sorry! can not calulate the area of ${area}`)
    }
  }
  
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

