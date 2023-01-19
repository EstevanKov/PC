//console.log("hola JavaScript")

/*
function sumar(uno,dos){
   var suma = uno + dos;
   
   var tipo1 = typeof(uno);
   var tipo2 = typeof(dos);

   if(tipo1 != "number" || tipo2 != "number"){
    return "Error";
   }
   else{
    return suma;
   }
}

var res = sumar(10,"20");
//var res2 = sumar(24,"45A");

console.log(res);
//console.log(res2);
*/

function SumarArray(arreglo=[]){
var suma=0;

for(i=0; i<=arreglo.length-1;i++){
  
   tipo = typeof(arreglo[i]);
   
   
   if(tipo != "number"){
      
      console.log("Error");
   }
   else{
      suma += arreglo[i];
      console.log(tipo)
      return suma
   }
   

}

}

var res = SumarArray([10,"A10",10])
console.log(res)