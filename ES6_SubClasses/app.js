class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        // don't forget the this object
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        // calls parent class constructor
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;


    }

    static getMemebershipCost() {
        return 500;
    }
}

// instanciate new customer
const john = new Customer('John', 'Doe', '555-555-555', 'Standard');
console.log(john.greeting());

// using the class name because it's a static method
console.log(Customer.getMemebershipCost());