var Creature = function (species) {
    this.species = species;
};
Creature.prototype = {
    constructor: Creature,
    mainTask: "Survive and reproduce",
};

var Mammal = function (name) {
    Creature.call(this);
    this.name = name;
};
Mammal.prototype = {
    constructor: Mammal,
    blood: "Warm"
};
Mammal.prototype = Object.create(Creature.prototype);
Mammal.prototype.constructor = Mammal;

var Dog = function (breed) {
    Mammal.call(this);
    this.breed = breed;
};
Dog.prototype = {
    constructor: Dog,
    secondaryTask: "Help human"
};

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;
let tony = new Dog("ScottishTerrier");
tony.likes = "food";

let ownProps = [];
let prototypeProps = [];
for (let property in tony) {
  if(tony.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps)
console.log(prototypeProps)
console.log(tony)
