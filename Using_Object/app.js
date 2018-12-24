const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstname} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstname = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);

const brad = Object.create(personPrototypes, {
    firstname: {
        value: 'Brad'
    },
    lastName: {
        value: 'Traversy'
    },
    age: {
        value: 36
    }
});
console.log(brad);

mary.getsMarried('Tompson');
console.log(mary.greeting());
console.log(brad.greeting());