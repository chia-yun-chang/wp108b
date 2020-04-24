var sd = [1,2,3,4,5];
 var total = 0;
 for(var i=0;i<sd.length;i++)
 {
     total+=sd[i];
 }
 var mean=total/sd.length;
 total=0;
 for(var i=0;i<sd.length;i++)
 { 
     var deviation=sd[i]-mean;
     total+=deviation*deviation;
 }
 var seddev=Math.sqrt(total/sd.length);
 console.log("%s的標準差: %d", sd, seddev); 