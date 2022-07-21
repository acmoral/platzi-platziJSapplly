function Modas(){
    const listaElement = document.querySelectorAll('input')
    const lista = Array.from(listaElement).map(function(x){return parseInt(x.value);});
    const moda = (lista)=>{return lista.sort((a,b)=>lista.filter(v=> v===a).length-lista.filter(v=> v===b).length).pop()};
    alert(moda(lista));
};