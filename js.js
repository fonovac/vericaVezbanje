function bill(){
    var myarray=[];
   document.f1.nw.value = ""; 
   var a = document.f1.t.value;
   var c = a.length
       for (var ii=0;ii<c;ii++){
       myarray[ii]=a.charAt(ii);
       }

   myarray.sort(function() {return 0.5 - Math.random()}) ;

   for (var i=0;i<myarray.length;i++){
   document.f1.nw.value += (myarray[i])+"\n"; 
   }
}
       