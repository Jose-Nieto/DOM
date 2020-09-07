var galones = document.getElementById("cantidad");
var gasolina;
var total;
var total1=document.getElementById("subtotal");
var diesel=document.getElementById("diesel");
var regular=document.getElementById("regular");
var especial=document.getElementById("especial");

diesel.addEventListener('click', function(){

gasolina=diesel.value;
total=gasolina*parseInt( galones.value);

});

regular.addEventListener('click', function(){

    gasolina=regular.value;
    total=gasolina*parseInt( galones.value);;
    
    });

    especial.addEventListener('click', function(){

        gasolina=especial.value;
        total=gasolina*parseInt( galones.value);;
 
        });
        setInterval(() => {
            total1.value=total;
        }, 0);

       