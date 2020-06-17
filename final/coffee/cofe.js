function total(id){
    var quantity=document.getElementById("quantity"+id).value;
    var price=document.getElementById("price"+id).value;
    var smallTotal=quantity*price;
    var smallT=document.getElementById("smallTotal"+id);
    smallT.innerHTML=smallTotal;
    var totalPrice=0;
  
    for(var a=1;a<4;a++){
      var quantity=document.getElementById("quantity"+a).value;
      var price=document.getElementById("price"+a).value;
      var smallTotal=quantity*price;
      totalPrice=totalPrice+smallTotal;}
  
    var total=document.getElementById("total");
    total.innerHTML=totalPrice;}
  
  function initialize(){
    var totalPrice=0;
  
    for(var a=1;a<4;a++){
      var quantity=document.getElementById("quantity"+a).value;
      var price=document.getElementById("price"+a).value;
      var smallTotal=quantity*price;
      totalPrice=totalPrice+smallTotal;
      var smallT=document.getElementById("smallTotal"+a);
      smallT.innerHTML=smallTotal;}
  
    var total=document.getElementById("total");
    total.innerHTML=totalPrice;}