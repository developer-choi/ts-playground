class DeclaredClass {}
const ExpressedClass = class {}
function declaredFunction() {}
const expressedFunction = function () {};
const arrowFunction = () => {};

console.log(DeclaredClass.name); // 'DeclaredClass'
console.log(ExpressedClass.name); // 'ExpressedClass'
console.log(declaredFunction.name); // 'declaredFunction'
console.log(expressedFunction.name); // 'expressedFunction'
console.log(arrowFunction.name); // 'arrowFunction'
