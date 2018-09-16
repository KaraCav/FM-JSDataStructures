// SECTION 1- Psuedoclassical Javascript- There are many methods in JS of creating classes, but this is the 'industry standard' and what's expected in an interview
// Data structure: container for data that fits different needs
// Defining psuedoclass with a Constructor
function Building(floors) {
    this.what = 'building';
    this.floors = floors;
    //function sets 'this = {}' and returns 'this'
}
// We add a method to the Building through prototype
Building.prototype.countFloors = function () {
    return "I have " + floors + " floors";
}
var myHouse = new Building(2);
// We do NOT want this inside the Building, or else everytime we create a "new" we are creating yet another function. We don't want to keep creating new functions, we just want the ability to call the fx
// So PROPERTIES of Building go inside the constructor, whereas METHODS go on the prototype
// countFloors can only be called on instances created from "Building", like "myHouse"
function collection(number) {
    this.name = "Harry Potter";
    this.items = number;
    this.access = true;
}
collection.prototype.giveAccess = function (boolean) {
    return "You have access to my collection: " + boolean;
}

//Stacks and Queues



// 2D Array
// int[][] nums = { {1, 3, 7, 5 },
// { 5, 8, 4, 6 },
// { 7, 4, 2, 9 } };
// int search = 4;
// foundNumber:
// for (int i = 0; i < nums.length; i++) {
//     for (int j = 0; j < nums[i].length; j++) {
//         if (nums[i][j] == search) {
//             System.out.println(
//                 "Found " + search + " at position " + i + "," + j);
//             break foundNumber;
//         }
//     }
// }


// ------------- SECTION 2 -------------- //
// STACKS: LIFO- Last in, first out (like an array with only push() and pop() )
// this is important for concept of recursion- one function calls others inisde it and can also cause an infinte loop
var Stack = function(){
    this.storage = "";
}
Stack.prototype.push = function(val){
    this.storage = this.storage.concat("***", val);  //separates each val with ***
}
Stack.prototype.pop = function(val){
    var str = this.storage.slice(this.storage.lastIndexOf("***" ) + 3);
    this.storage = this.storage.substring(0,this.storage.lastIndexOf("***"))
    return str;
}

// QUEUES- FIFO First In First Out (like a regular line a person stands in). Adding into is “enqueuing” and out is “dequeuing”

function Stack(capacity){
                this._capacity = capacity || Infinity;
                this._storage = {};
                this._count = 0;     }

Stack.protoype.push = function(value){
                if(this._count < this._capacity){
                this._storage[this._count ++] = value;
                }
        return this._count;
}

// ------------- SECTION 3 -------------- //
// Recursion
// When a method calls itself. Is used to keep code “DRY”.
// 1.  Identify Base Case
// 2. Identify recursive cases and RETURN where appropriate
// 3. Write procedures that bring you closer to Base Case
Var callMyself = function() {
	if(BASECASE){ return “something” }
	else{ //recursive case
		callMyself() }
	return callMyself;
}
// OR
Var callMyself= function(){
  if(n <= 1){
	return “complete” }
  Else{
	return callMyself(n-1)
  }
}
callMyself(3)

//Factorial with loop
function computeFactorial(){
  var result= 1;	
  for(let i = 2; i < 6; i++){
    result *= i;
  }
	return result;
}
// equivalent is 5! (five factorial; 2*3*4*5)
// To find the factorial of a given number, we need to work backward, calling the function within itself until we reach 1
function computeFactorial(num){
  if(num === 1){
    return 1;	  
  }
  else {
    return num * computeFactorial(num - 1); // this will eventually return "1" back up the stack  
  }
}
// So, once the function has been called until it hits the base case "if" line, it will return 1, to the function that called it, the "num" in this case will = 2. 
// That in turn will pass num (2) times the invocation of the function (computeFactorial(num-1)) --> which is 2, and then "2" is passed up
