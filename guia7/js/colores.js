
var h1=document.getElementById("h1");
var cambiar = document.getElementById('opciones');
var uno =document.getElementById("uno");
var dos=document.getElementById("dos");
var tres=document.getElementById("tres");



    cambiar.addEventListener('change', function(){

       if(cambiar.value=="1"){
        uno.style.backgroundColor="blue";
        uno.style.color="white";

        uno.style.fontFamily="Grandstander";
        uno.style.boxShadow="1px 1px 1px 1px #000";
        h1.style.fontFamily="Grandstander";

        dos.style.backgroundColor="blue";
        dos.style.color="white";

        dos.style.fontFamily="Grandstander";
        dos.style.boxShadow="1px 1px 1px 1px #000";
        h1.style.fontFamily="Grandstander";
        tres.style.backgroundColor="blue";
        tres.style.color="white";

        tres.style.fontFamily="Grandstander";
        tres.style.boxShadow="1px 1px 1px 1px #000";
        h1.style.fontFamily="Grandstander";
 
         }
         if(cambiar.value=="2"){
            uno.style.backgroundColor="red";
            uno.style.textAlign="justify";
            uno.style.color="white";
            uno.style.fontFamily="Open Sans Condensed";
            uno.style.boxShadow="1px 1px 1px 1px #000";
            h1.style.fontFamily="Open Sans Condensed";
    
            dos.style.backgroundColor="red";
            dos.style.textAlign="justify";
            dos.style.color="white";
            dos.style.fontFamily="Open Sans Condensed";
            dos.style.boxShadow="1px 1px 1px 1px #000";
            h1.style.fontFamily="Open Sans Condensed";
            tres.style.color="white";
            tres.style.backgroundColor="red";
            tres.style.textAlign="justify";
            tres.style.fontFamily="Open Sans Condensed";
            tres.style.boxShadow="1px 1px 1px 1px #000";
            h1.style.fontFamily="Open Sans Condensed";
     
             }
                    if(cambiar.value=="3"){
            uno.style.backgroundColor="green";
            uno.style.textAlign="center";
            uno.style.color="white";
            uno.style.fontFamily="Permanent Marker";
            uno.style.boxShadow="1px 1px 1px 1px #000";
            h1.style.fontFamily="Permanent Marker";
    
            dos.style.backgroundColor="green";
            dos.style.textAlign="center";
            dos.style.color="white";
            dos.style.fontFamily="Permanent Marker";
            dos.style.boxShadow="1px 1px 1px 1px #000";
            h1.style.fontFamily="Permanent Marker";
            tres.style.color="white";
            tres.style.backgroundColor="green";
            tres.style.textAlign="center";
            tres.style.fontFamily="Permanent Marker";
            tres.style.boxShadow="1px 1px 1px 1px #000";
            h1.style.fontFamily="Permanent Marker";
     
             }
        
        });

