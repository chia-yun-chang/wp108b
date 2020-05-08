class Person {
    constructor(firstName, lastName, id){
        this.firstName=firstName
        this.lastName=lastName
        this.id=id
    }
}
var johnDoe = new Person('John', 'Doe', 5566)
console.log(johnDoe.fullName())

var 