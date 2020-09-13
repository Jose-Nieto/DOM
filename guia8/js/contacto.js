function letras(e){

    key=e.keyCode || e.which;
    teclado= String.fromCharCode(key).toLowerCase();
    letra=" abcdefghijklmnñopqrstuvwxyz";
    especiales="8-37-38-49-164";

    teclado_especial=false;
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }

    if(letra.indexOf(teclado)==-1 && !teclado_especial){
        alert("No se permite numeros");
return false;

    }
}