var dit={"狗":"dog", "貓":"cat", "追":"chase", "一隻":"a", "吃":"eat" };
function word(a)
{
 var sum=[]
  for(i=0;i<a.length;i++)
{
 var eword=a[i]
 var ework=dit[eword]
  sum.push(ework)
}
  return sum;
}
var a=process.argv.slice(2)
console.log(word(a));