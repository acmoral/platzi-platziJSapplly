const salariosCol = colombia.map(function(x){return x.salary;});
const salariosColSorted = salariosCol.sort(function(a,b){return a-b});
function esPar(number){return (number % 2 ===0);};

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad-1];
        const personaMitad = (personaMitad1+personaMitad2)/2;
        return personaMitad;
    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);
// mediana del top 10%
const spliceStart =  salariosColSorted.length*90/100;
const spliceCount  = salariosColSorted.length-spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log({medianaGeneralCol,medianaTop10Col});