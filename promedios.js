
function Promedios(){
    const listaElement = document.querySelectorAll('input')
    const lista = Array.from(listaElement).map(function(x){return parseInt(x.value);});
    let sumaLista = lista.reduce(function(valorAcumulado=0,nuevoElemento){return valorAcumulado+nuevoElemento;});
    const promedioL = sumaLista/lista.length;
    alert(promedioL);
}