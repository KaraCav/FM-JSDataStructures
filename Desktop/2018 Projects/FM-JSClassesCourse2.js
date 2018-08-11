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
