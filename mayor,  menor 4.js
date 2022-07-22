function mayormenor(){
    var n1= parseFloat(document.resultados1.n1.value);  
    var n2= parseFloat(document.resultados1.n2.value); 
    var n3= parseFloat(document.resultados1.n3.value); 
    var n4= parseFloat(document.resultados1.n4.value); 

 

if(n1<n2 & n2<n3 & n3<n4)
{
    document.resultados1.mayor.value=n4;
    document.resultados1.menor.value=n1;
}

if(n2>n1 & n2>n3 & n3<n4)   
{
    document.resultados1.mayor.value=n4;
    document.resultados1.menor.value=n1;
}

if(n4>n3 & n3>n2 & n2>n1)
{
    document.resultados1.mayor.value=n4;
    document.resultados1.menor.value=n1;
}

if(n1==n2 & n3==n4)
{
    document.resultados1.mayor.value=n4;
    document.resultados1.menor.value=n1;
}
if(n1>n2 & n2>n4 & n4>n3)
{
    document.resultados1.mayor.value=n1;
    document.resultados1.menor.value=n3;
}

if(n1>n3 & n3>n4 & n4>n2)
{
    document.resultados1.mayor.value=n1;
    document.resultados1.menor.value=n2;
}

if(n1>n4 & n4>n3 & n3>n2)
{
    document.resultados1.mayor.value=n1;
    document.resultados1.menor.value=n2;
}

if(n3>n1 & n1>n4 & n1>n2)
{
    document.resultados1.mayor.value=n3;
    document.resultados1.menor.value=n2;
}

if(n3>n4 & n4>n1 & n1>n2)
{
    document.resultados1.mayor.value=n3;
    document.resultados1.menor.value=n2;
}

if(n3>n1 & n1>n2 & n2>n4)
{
    document.resultados1.mayor.value=n3;
    document.resultados1.menor.value=n4;
}

if(n3>n2 & n2>n4 & n4>n1)
{
    document.resultados1.mayor.value=n3;
    document.resultados1.menor.value=n1;
}

if(n3>n4 & n4>n1 & n2>n1)
{
    document.resultados1.mayor.value=n3;
    document.resultados1.menor.value=n1;
}

if(n3>n1 & n1>n4 & n1>n2)
{
    document.resultados1.mayor.value=n3;
    document.resultados1.menor.value=n2;
}

else if(n1==n2 & n2==n3 & n3==n4){
    alert("Los numeros son iguales")
}

}
