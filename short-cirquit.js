var a = true;
var b = true;
a && console.log("Hello world");
b && console.log("Hello B") && console.log("Okay");

var c = 0;
c || (c = 5);
console.log(c);

var d = 3;
d || (d = 5);
console.log(d);