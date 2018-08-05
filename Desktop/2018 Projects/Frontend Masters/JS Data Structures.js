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
}
collection.prototype.giveAccess = function (boolean) {
    return "You have access to my collection: " + boolean;
}