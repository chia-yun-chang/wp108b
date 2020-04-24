function transpose(sourceArr)
{
    var reversedArr = [];
    for(var i = 0; i < sourceArr[0].length; i++)
    {
       reversedArr[i] = [];
       for(var j = 0; j < sourceArr.length; j++)
       {
           reversedArr[i][j] = sourceArr[j][i];
       }
    }
   return reversedArr;
}

console.log(transpose([[1,2,3],[3,2,1]])); 