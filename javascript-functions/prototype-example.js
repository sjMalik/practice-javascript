function Person(name, job, yob){
    this.name = name;
    this.job = job;
    this.yob = yob;
}

Person.prototype.calcuteAge = function(){
    console.log(2023 - this.yob)
}

console.log(Person.prototype);
const person1 = new Person('S', 'A', 2019);
const person2 = new Person('X', 'A', 2014);
person1.calcuteAge();
person2.calcuteAge();