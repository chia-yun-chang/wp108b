/* 1.請寫一個程式計算 10! ，也就是 10*9*8*....*1 。*/

a=1;
for(i=1;i<=10;i++){
  a=a*i;
}
console.log('10!=',a);

/* 2.請寫一個程式印出九九乘法表。 */

for(i=1;i<10;i++){
    for(j=1;j<10;j++){
      a=i*j;
      console.log("%d*%d=%d",i,j,a);
    }
}

/* 3.給你兩個數字，請算出這兩個數字之間有幾個質數(包含輸入的兩個數字)？
     範例： countPrime(3, 7) => 3 */

a=3;b=7;c=0;
for(i=a;i<=b;i++){
    d=0;
    for(j=2;j<i;j++){
        if(i%j===0){
          d=1;  
          break;
        }
    }
  if(i<2)d=1;
  if(d===0)c=c+1;   
}
console.log("countPrime(%d,%d)=>%d",a,b,c);