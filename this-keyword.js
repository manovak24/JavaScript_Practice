const nameObj = {
    firstName: "Mark",
    lastName: "Novak",
    fullName: function() {
        // CAN"T USE ARROW FUNCTION HERE
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
nameObj.fullName();

const user = {
    firstName: "John",
    lastName: "Doe",
    pets: ["cat", "dog", "fish"],
    listPets() {
        this.pets.forEach(function(pet) {
            console.log(pet);
        });
    }
};
user.listPets();

const userTwo = {
    firstName: "Bob",
    lastName: "Doe",
    pets: ["cat", "dog", "fish"],
    listPets() {
        this.pets.forEach(function(pet) {
            console.log(`${this.firstName}'s ${pet}`);
        }, this); 
        // NEED TO ADD "this" at the end or else it won't work
    }
};
userTwo.listPets();

function User(name) {
    this.name = name;
    console.log(this);
    console.log(this.name);
}

const newUser = new User("John");