/* array */
 var a=[1,6,2,5,3,6,1];
 for (i=0; i<a.length; i++){
   console.log("a[%d]=%d", i, a[i]);
 }

/* array2D */
 var a=[[1,6,2],[5,3,6]];
 for (var i=0; i<a.length; i++) {
   var line = "";
    for (var j=0; j<a[i].length; j++) {
     line = line + a[i][j] + " ";
   }
  console.log(line);
 }

/* callback */
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
 console.log('sub(10,3)',sub(10,3));

/* circle */
 var circle = {
     r:3,
     area:function(){
         return 3.14*this.r*this.r;
     }
 }
 console.log("circle.r=%d", circle.r);
 console.log("circle.area()=%d",circle.area());

/* clock */
 function printTime(){
     console.log(new Date());
     setTimeout(printTime, 1000);
 }
 setTimeout(printTime, 1000);

/* complexclass */
 class complex{
     constructor(r,i){
         this.r = r;
         this.i = i;
     }
     add(c2){
         return new complex(this.r+c2.r, this.i+c2.i);
     }
     sub(c2){
         return new complex(this.r-c2.r, this.i-c2.i);
     }
     mul(c2){
         return new complex(this.r*c2.r-this.i*c2.i,
                            this.r*c2.i+this.i*c2.r);
     }
     toString(){
         return this.r+"+"+this.i+"i"
     }
 }
 var a = new complex(1,2), b=new complex(2,1);
 var x = a.add(b).sub(b).mul(b);
 console.log("a=%s", a);
 console.log("b=%s", b);
 console.log("a.add(b)=%s", a.add(b)); 
 console.log("a.sub(b)=%s", a.sub(b));
 console.log("a.mul(b)=%s", a.mul(b));
 console.log("x=%s", x);

/* dlook */
 var e2c = { dog:"狗", cat:"貓",a:"一隻", chase:"追", eat:"吃" };
 function look(e){
     return e2c[e];
 }
 e = process.argv[2];
 c = look(e);
 console.log(e+"="+c);

/* each */
 function each(a,f){
     for(var i in a){
         f(a[i]);
     }
 }
 each ([3,4,5,6], console.log);
 function sinPrint(x){
     console.log("sin(%d)=%d", x, Math.sin(x));
 }
 each ([3,4,5,6],sinPrint);

/* for */
 for (i=1;i<=10;i++){
     console.log("i=", i);
 }

/* forbreak */
 for (i=1;i<=10;i++) {
     if (i == 3) continue;
     if (i == 8) break;
     console.log("i="+i);
 }

/* foreach */
 var a=[1,6,2,5,3,6,1]
 for (i in a){
   console.log("a[%d]=%d", i, a[i]);
 }

/* forof */
 var a=[1,6,2,5,3,6,1]
 for (o of a){
   console.log("o=%s", o)
 }

/* fptr */
 function sub(a,b){
     return a-b;
 }
 function f5(f,a){
     return f(a,5);
 }
 console.log("sub(8,5)="+sub(8,5));
 console.log("f5(sub,8)="+f5(sub,8));

/* fsum */
 function sum(n){
     var s = 0;
     for (i=1; i<=n; i++){
        s = s + i;
     }
     return s;
 }
 sum10 = sum(10);
 console.log("1+...+10="+sum10);

/* function */
 function sub(a,b){
    return a-b;
 }
 var add = function(a,b){
    return a+b;
 }
 console.log(" add(3,5)=", add(3,5), "sub(7,2)=", sub(7,2));

/* hello */
 console.log('hello!');
 var x = 3, y = 5;
 console.log('x=', x,'y=', y,'x+y=', x+y);

/* if */
 var score = 61;
  if (score >= 60)
    console.log("及格");
  else
    console.log("不及格");

/* json */
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

/* maps */
 var c = console;
 function map(f, a){
   var ma = [];
    for (var i in a){
      ma.push(f(a[i]));
    }
  return ma;
 }
 function square(x){
    return x*x;
 }
 c.log("map(x^2, [3,1,5,4,2])="+map(square, [3,1,5,4,2]));
 c.log("map(sin(x), [3,1,5,4,2])="+map(Math.sin, [3,1,5,4,2]));

/* max */
 function max(a,b){
  if(a>b)
    return a;
  else
    return b;
}
 m=max(9,5);
 console.log("max(9,5)="+m);

/* modify */
 function modify(num,array){
    num = num + 1;
    array[0] = array[0]+1;
 }
 var n=3, a=[3,2,1];
 modify(n, a);
 console.log("n=", n, "a=", a);

/* people */
 var people={
    name:"john",
    age:30,
  print:function(){
    console.log("name=", this.name, "age=", this.age);
  }
 }
 people.print();

/* prime */
 function isPrime(n){
  for(var i=2; i<n; i++){
    if(n%i ===0)
     return false;
  }
  return true;
 }
 console.log("isPrimw(33)="+isPrime(33));
 console.log("isPrimw(17)="+isPrime(17));
 for (var p=1; p<=100; p++){
  if (isPrime(p))
    console.log("isPrime("+p+")");
 }

/* random */
 var random = function(a,b) { 
    return a+Math.random()*(b-a); 
 }
 var randomInt = function(a,b) { 
    return Math.floor(random(a,b)); 
 }
 var sample = function(array) { 
    return array[randomInt(0,array.length)]; 
 }
 console.log("random(10,20)=", random(10,20));
 console.log("randomInt(10,20)=", randomInt(10,20));
 console.log("sample([a,b,c,d,e])=", sample(['a','b','c','d','e']));

/* run */
 function run(f,x){
    var fx = f(x);
    console.log("f(x)="+fx);
 }
 run (Math.sin, Math.PI/4);

/* sum */
 sum=0;
 for (i=1;i<=10;i++){
    sum = sum + i;
    console.log("i=", i, "sum=",sum);
 }

/* while */
 i=1;
 while (i<=10){
   console.log("i=",i);
   i = i + 1;
 }

/* whilesum */
 sum = 0;
 i=1;
 while(i<=10){
    sum = sum + i;
    console.log("i=", i, "sum=", sum);
    i = i + 1;
 }