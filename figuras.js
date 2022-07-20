//calculemos el perimetro de un cuadrado

const perimetroCuadrado = (ladoCuadrado)=>4*ladoCuadrado;
const areaCuadrado = (ladoCuadrado)=>ladoCuadrado*ladoCuadrado;

// calculemos lo mismo para el triangulo

const perimetroTriangulo = (ladosTriangulo)=>ladosTriangulo.reduce((sumpartial,x)=>sumpartial+x,0);
const areaTriangulo = (s_0,ladosTriangulo)=>Math.sqrt(ladosTriangulo.reduce((s,x)=>s*(s_0-x),s_0));

// calculemos lo mismo para el circulo

const perimetroCirculo = (radioCirculo)=>2*Math.PI*radioCirculo;
const areaCirculo = (radioCirculo)=>radioCirculo*Math.PI*radioCirculo;

//Aqui interactuamos con el HTML

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;   
    const perimetro  = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;   
    const area  = areaCuadrado(value);
    alert(area);
}
function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloLado3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;   
    const lados = [parseFloat(value1),parseFloat(value2),parseFloat(value3)]
    const perimetro  = perimetroTriangulo(lados);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloLado3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const lados = [parseFloat(value1),parseFloat(value2),parseFloat(value3)]
    const s_0 = perimetroTriangulo(lados)/2;
    const perimetro  = areaTriangulo(s_0,lados);
    alert(perimetro);
}
function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;   
    const perimetro  = perimetroCirculo(value);
    alert(perimetro);
}
function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;   
    const area  = areaCirculo(value);
    alert(area);
}