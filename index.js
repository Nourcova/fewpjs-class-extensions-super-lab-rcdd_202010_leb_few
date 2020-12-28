// Write your classes here
class Tree{
  constructor(species){
    this.species=species;
  }
  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  }
}

class Deciduous extends Tree{
  constructor(species,name){
    super(species);
    this.name=name;
  }
  
  static definition(){
    return (super.definition() + " Deciduous trees shed their leaves annually.")
  }
}

<<<<<<< HEAD
class Evergreen extends Tree{
=======
class Evergreen{
>>>>>>> 806fc398d02b17bbb62b0b9bca465d073541cea3
  constructor(species, name){
    super(species);
    this.name=name;
  }
  
  static definition(){
<<<<<<< HEAD
    return (super.definition() + " Evergreens keep their leaves all year round.")
=======
    return (super.definition) + " Evergreens keep their leaves all year round."
>>>>>>> 806fc398d02b17bbb62b0b9bca465d073541cea3
  }
}