module.exports.add = (x, y) => x + y;

module.exports.PI = 3.14159;

module.exports.square = x => x * x;

/* Option 1 *, requires for module.exports to be removed from functions /

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

/* Option 2, requires for module.exports to be removed from functions */

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports = math;