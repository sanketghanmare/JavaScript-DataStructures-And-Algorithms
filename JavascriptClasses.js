class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}.`
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies > 3) {
            return "You are penalized for being late for more than 3 times."
        }
        return `${this.firstName} ${this.lastName} is late for ${this.tardies} times.`
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce(function (a,b) { return a+b;})
        return `${this.firstName} ${this.lastName} your Average Score is ${sum/this.scores.length}`
    }

    //static methods are also known as class methods and they can't be accessed by the objects of the class
    // and use to perform the the operation within the class itself
    static enrollment() {
        return 'Students are enrolled'
    }
}

let sanket = new Student("Sanket", "Ghanmare","A");
console.log(sanket)

console.log(sanket.firstName);
console.log(sanket.lastName);
console.log(sanket.grade);

console.log(sanket.fullName());

console.log(sanket.markLate());
sanket.markLate();
sanket.markLate();
sanket.markLate();

console.log(sanket.markLate());

sanket.addScore(95);
console.log(sanket.addScore(98));
console.log(sanket.calculateAverage());

//Note:- Directly class name is used to call the static method and not the object of the class.
console.log(Student.enrollment()) 

