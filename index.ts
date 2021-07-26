class Base {
  static staticBaseField = 3;
}

class Derived extends Base {}

console.log(Derived.staticBaseField);

