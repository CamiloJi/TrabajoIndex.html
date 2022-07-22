function mayormenor2(){
    var n1= parseFloat(document.resultado1.n1.value);  
    var n2= parseFloat(document.resultado1.n2.value); 


if(n1==n2){
    alert("Los numeros son iguales")
}
if(n1>n2){
    document.resultado1.mayor.value=n1;
    document.resultado1.menor.value=n2;
}
if(n1<n2){
    document.resultado1.mayor.value=n2;
    document.resultado1.menor.value=n1;
}
}
