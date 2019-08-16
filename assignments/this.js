/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
// Implicit binding occurs when dot notation is used to invoke the function
const usa = {
  city: 'Las Vegas',
  state: 'Nevada',
  speak: function() {
    return `${this.city} is a city in ${this.state}`;
  }
}

console.log(usa.speak());

// Principle 3
// code example for New Binding2

function UsaState(attributes) {
  this.city = attributes.city;
  this.state = attributes.state;
}

UsaState.prototype.doStuff = function(adjective ="nice") {
  console.log(`${this.city} is a ${adjective} city in ${this.state}`);
}

const newUsaState = new UsaState({
  city: 'San Francisco',
  state: 'California'
});

newUsaState.doStuff('fun');


// Principle 4

// code example for Explicit Binding
// explicit binding occurs when .call .apply or .bind is used as a function
// state.prototype = Object.create(State.prototype);
const sanDiego = new UsaState({
  city: 'San Diego',
  state: 'California'
});

sanDiego.doStuff.apply(newUsaState);
sanDiego.doStuff('fun')