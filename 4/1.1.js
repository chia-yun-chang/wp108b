var mean =[1,2,3,4,5];
var total =0;
for(var i=0;i<mean.length;i++)
{
    total+=mean[i];
}
var average=total/mean.length;

console.log("[%s] average = ",mean,average);