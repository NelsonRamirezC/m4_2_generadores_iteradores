var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next()); // w
console.log(eArr.next()); // y
console.log(eArr.next()); // k
console.log(eArr.next()); // o
console.log(eArr.next()); // p
console.log(eArr.next());

