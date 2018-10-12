var numeros = [];
var numero = prompt("Numero a buscar entre els aleatoris.");
for (var i = 0 ; i< 500000; i++){
    numeros[i]=Math.round(Math.random() * 700000);
}
var trobat = false;
var primertemps = new Date();
for (var i=0; i<numeros.length; i++){
   if(numero == numeros[i]){
       if(numero%2==0){
        trobat=true;
        var final = new Date();
       }
   }
}
if(trobat==false){
    alert("No trobat");
}
var temps = (final-primertemps)/3600;
if (trobat==true){
    alert("L'ha trobat i ha trigat " + temps);
}