class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }
  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "sub":
        return this.a - this.b;
      case "mul":
        return this.a * this.b;
      case "div":
        return this.b !== 0 ? this.a / this.b : "Can't divide by zero";
      default:
        return "Invalid Operation";
    }
  }
}

const calc = new Calculator(5,2,"div");
console.log(calc.calculate());

