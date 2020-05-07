var people={
    name:"john",
    age:30,
    print:function(){
        console.log("name=", this.name, "age=", this.age);
    }
}
people.print();