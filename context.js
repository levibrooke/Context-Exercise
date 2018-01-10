var Robot = function (name) {
  this.name = name;

}

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");
var bender = new Robot("Bender Rodriguez");
var optimus = new Robot("Optimus Prime");
var megaman = new Robot("Mega Man");
var bmo = new Robot("B-Mo");
var wall_e = new Robot("Wall-E");


// #1 - invoke add() w/ args: 0, 1

console.log(add(0, 1));

// #2  - invoke add() w/in context of voltron

console.log(add.call(voltron, 2, 3));

// #3 - invoke add() w/in contet of optimus

let optimusArgs = [20, 30];
console.log(add.apply(optimus, optimusArgs));

// #4 - bind add() to new function name calculate w/ context of bender

let calculate = add.bind(bender);
console.log(calculate("drinking ", "beer"));