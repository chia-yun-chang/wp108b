/* 1.請將本章中的《英翻中》系統，改成《中翻英》系統，但輸入的中文詞彙之間可以強制用空白隔開。
    例如:
    $ node mt2.js 一隻 狗 追 一隻 貓
    [ 'a', 'dog', 'chase', 'a', 'cat' ] */

var dit={"狗":"dog", "貓":"cat", "追":"chase", "一隻":"a", "吃":"eat"};
function word(a){
  var sum=[]
   for(i=0;i<a.length;i++){
    var eword=a[i]
    var ework=dit[eword]
     sum.push(ework)
   }
  return sum;
}
var a=process.argv.slice(2)
console.log(word(a));

/* 2.請寫出一個具有『加、減、內積、負』的向量物件？ (Vector, add, sub, dot, neg)
   提示：第二題架構如下：
    class Vector {
    add(v2) { ... }
    sub(v2) { ... }
    dot(v2) { ... }
    neg() { ... }
} */

class Vector{
    constructor (x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(v2){ 
        return new Vector (this.x + v2.x, this.y + v2.y, this.z + v2.z);

    }
    sub(v2){ 
        return new Vector (this.x - v2.x, this.y - v2.y, this.z - v2.z);
    }
    dot(v2){ 
        return new Vector (this.x * v2.x, this.y * v2.y, this.z * v2.z);
    }
    neg(){  
        return new Vector (0 - this.x, 0 - this.y, 0 - this.z);
    }
    toString(){
        return "["+this.x+","+this.y+","+this.z+"]";
    }
  }
 module.exports.Vector = Vector;

/* 3.請把2.儲存為 vector.js ，然後把當中的類別 Vector 用 module.exports 匯出，並用 vectorTest.js 去測試你的類別。

vectorTest.js

const V = require('./vector')
var v1 = new V.Vector([1,2,3])
var v2 = new V.Vector([1,1,1])
console.log('v1.add(v2)=', v1.add(v2))
console.log('v1.dot(v2)=', v1.dot(v2))
console.log('v1.neg()=', v1.neg())

輸出:
v1.add(v2)= [2,3,4]
v1.dot(v2)= 6
v1.neg() = [-1,-2,-3] */

const vector = require("./vector.js")
var v1 = new vector.Vector(1,2,3)
var v2 = new vector.Vector(1,1,1)
console.log('v1.add(v2)=%s', v1.add(v2))
console.log('v1.sub(v2)=%s', v1.sub(v2))
console.log('v1.dot(v2)=%s', v1.dot(v2))
console.log('v1.neg()=%s', v1.neg())