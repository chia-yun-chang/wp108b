/* 一維矩陣:
   1.1 請算出某陣列的平均值？
    範例： mean([1,2,3,4,5]) => 3 */

var mean =[1,2,3,4,5];
var total =0;
for(var i=0;i<mean.length;i++){
    total+=mean[i];
}
var average=total/mean.length;
console.log("%s average = ％d",mean,average);

/* 1.2 算出某陣列的標準差？ (標準差為 (xi-x)^2 的總和)
    範例： sd([1,2,3,4,5]) = sqrt((2^2+1^2+0^2+1^2+2^2)/5) = sqrt(2)=1.414。 */

var sd = [1,2,3,4,5];
var total = 0;
for(var i=0;i<sd.length;i++){
    total+=sd[i];
}
var mean=total/sd.length;
total=0;
for(var i=0;i<sd.length;i++){ 
    var deviation=sd[i]-mean;
    total+=deviation*deviation;
}
var seddev=Math.sqrt(total/sd.length);
console.log("%s的標準差: %d", sd, seddev); 

/* 1.3 寫一個程式做因數分解。
    範例：factor(45) => [3, 3, 5] */

function factor(a){
var array=[];
var i=2;
  while(a>1){
    if(a%i==0){
      array.push(i); 
      a=a/i;
      continue;
    }
   i++; 
  }
 return array;
}
console.log(factor(45)); 

/* 二維矩陣:
   2.1請寫一個函數計算兩矩陣相加？
    範例： add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]] */

function sub(a,b){
    var i, j, c = [];
    for (i=0; i<a.length; i++){
      c[i]=[];
       for(j=0; j<a[i].length; j++){
        c[i][j]=a[i][j] + b[i][j];
      }
    }
  return c;
}
console.log(sub([[1,2],[3,4]],[[1,1],[1,1]]));

/* 2.2請寫一個函數 neg(A) 傳回某矩陣 A 的負矩陣 -A。
    範例： neg([[1,2],[3,4]]) => [[-1,-2],[-3,-4]] */

function neg(a) {
 var i, j;
 var b = []; 
   for (i=0; i<a.length; i++){
      b[i] = []; 
        for (j=0; j<a[i].length; j++){
          b[i][j] = 0 - a[i][j];
        }
    }
    return b;
}
console.log(neg([[1,2],[3,4]])); 

/* 2.3寫一個程式把矩陣轉置。
    範例：transpose([[1,2,3], [3,2,1]]) => [[1,3], [2,2], [3,1]] */

function transpose(sourceArr){
 var reversedArr = [];
   for(var i = 0; i < sourceArr[0].length; i++){
     reversedArr[i] = [];
      for(var j = 0; j < sourceArr.length; j++){
       reversedArr[i][j] = sourceArr[j][i];
     }
   }
  return reversedArr;
}
console.log(transpose([[1,2,3],[3,2,1]])); 