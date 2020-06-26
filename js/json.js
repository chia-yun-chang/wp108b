var george ={
    "name": "george" ,
    "age": 25,
    "friends": [
        {"name":"john", "age": 22 },
        {"name":"mary", "age": 28 }
    ]
}

console.log("george.age="+george.age);
console.log("george.friends:");
var friends = george.friends;
for (i in friends)
 console.log("   "+friends[i].name+" is "+friends[i].age+"years old!");