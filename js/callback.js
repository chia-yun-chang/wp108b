function add(a,b){
    return a+b;
}
console.log('add(3,5)=', add(3,5))

var f = add
console.log('add(4,9)=', f(4,9))

//函數變數，匿名函數//


var sub = function(a,b){
    return a-b;
}
console.log('sub(10,3)',sub(10,3))