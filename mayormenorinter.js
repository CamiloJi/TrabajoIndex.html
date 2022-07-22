function mayormenorinter(){
    var n1= parseFloat(document.resultado1.n1.value);  
    var n2= parseFloat(document.resultado1.n2.value); 
    var n3= parseFloat(document.resultado1.n3.value);

    if(n1==n2 & n2==n3){
        alert("Los numeros son iguales")
    }

    if(n1>n2 & n2>n3)
    {
    document.resultado1.mayor.value=n1;
    document.resultado1.inter.value=n2;
    document.resultado1.menor.value=n3;
    }

    if(n1<n2 & n2<n3)
    {
    document.resultado1.mayor.value=n3;
    document.resultado1.inter.value=n2;
    document.resultado1.menor.value=n1;
    }

    if(n1>n2 & n2<n3)
    {
    document.resultado1.mayor.value=n2;
    document.resultado1.inter.value=n2;
    document.resultado1.menor.value=n1;
    }

    if(n1<n2 & n2<n3){
        document.resultado1.mayor.value=n3;
        document.resultado1.inter.value=n2;
        document.resultado1.menor.value=n1;
        }  
        
        if(n1>n2 & n2>n3){
        document.resultado1.mayor.value=n1;
        document.resultado1.inter.value=n2;
        document.resultado1.menor.value=n3;
        }
      
         if(n2<n1 & n1<n3){
          document.resultado1.mayor.value=n3;
          document.resultado1.inter.value=n1;
          document.resultado1.menor.value=n2;
          }
      
          if(n2>n1 & n1>n3){
            document.resultados2.mayor.value=n2;
            document.resultados2.inter.value=n1;
            document.resultados2.menor.value=n3;
          }  
          if(n3>n2 & n2>n1){
            document.resultado1.mayor.value=n3;
            document.resultado1.inter.value=n2;
            document.resultado1.menor.value=n1;
         }
      
      
                 
      
      }

