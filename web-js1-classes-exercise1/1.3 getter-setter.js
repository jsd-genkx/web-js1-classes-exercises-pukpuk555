// // getter = special method that makes a property readable
// // setter = special method that makes a property writable

// // validate and modify a value when reading/writing a property

// class Superhero {
//   constructor(name, superpower) {
//     this._name = name;
//     this._superpower = superpower;
//   }

//   // Getter
//   get name() {
//     return this._name;
//   }

//   // Setter
//   set name(newName) {
//     if (newName) {
//       this._name = newName;
//     } else {
//       console.log("Name cannot be empty");
//     }
//   }

//   // Getter
//   get superpower() {
//     return this._superpower;
//   }

//   // Setter
//   set superpower(newSuperpower) {
//     if (newSuperpower) {
//       this._superpower = newSuperpower;
//     } else {
//       console.log("Superpower cannot be empty");
//     }
//   }

//   describe() {
//     console.log(
//       `I am ${this._name}, and my superpower is ${this._superpower}.`
//     );
//   }
// }

// const thor = new Superhero("Thor", "control over thunder and lightning");
// thor.describe(); // Output: I am Thor, and my superpower is control over thunder and lightning.

// // Using setters to change properties
// thor.name = "Thor Odinson";
// thor.superpower = "godlike strength and control over thunder and lightning";
// thor.describe(); // Output: I am Thor Odinson, and my superpower is godlike strength and control over thunder and lightning.

//-------------------------------------------------------------------------------------

class character {
  constructor(name, skill) {
    this._name = name;
    this._skill = skill;
  }

  //Getter
  get name() {
    return this._name;
  }
  get skill() {
    return this._skill;
  }

  //Setter
  set name(newName) {
    if (newName) {
      this._name = newName;
    } else {
      console.log("cannot be empty");
    }
  }
  set skill(newSkill) {
    if (newSkill) {
      this._skill = newSkill;
    } else {
      console.log("cannot be empty");
    }
  }

  quote() {
    console.log(`I am ${this._name}. I use ${this._skill}.`);
  }
}

const caustic = new character("cuastic", "Toxic");
caustic.quote();

caustic.name = "Cuastic";
caustic.skill = "Toxic Gas";
caustic.quote();
