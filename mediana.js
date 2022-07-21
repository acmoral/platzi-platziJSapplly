function Medianas(){

    const listaElement = document.querySelectorAll('input')
    const lista = Array.from(listaElement).map(function(x){return parseInt(x.value);});
    const lenght = lista.length;
    const mitad = parseInt(lenght/2);
    let mediana = 0;
    if(lenght%2===0){
        const elemento1 = lista[mitad];
        const elemento2 = lista[mitad-1];
        mediana = (elemento1+elemento2)/2;
    }else{
        mediana = lista[mitad];
    }    
    alert(mediana);
};

