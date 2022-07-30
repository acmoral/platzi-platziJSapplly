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
    const newDiv = document.createElement('div');
    newDiv.id = "pop-up";
    const x = document.createElement('button');
    x.textContent="X";
    x.id ='x';
    x.addEventListener('click',function (){newDiv.parentElement.removeChild(newDiv)});
    const pContainer = document.createElement('p');
    pContainer.textContent = `El perimetro del cuadrado es ${perimetro}`;
    newDiv.append(x,pContainer);
    const mainNode = document.getElementsByClassName('geometry');
    mainNode[0].append(newDiv);

}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;   
    const area  = areaCuadrado(value);
    const newDiv = document.createElement('div');
    newDiv.id = "pop-up";
    const x = document.createElement('button');
    x.textContent="X";
    x.id ='x';
    x.addEventListener('click',function (){newDiv.parentElement.removeChild(newDiv)});
    const pContainer = document.createElement('p');
    pContainer.textContent = `El area del cuadrado es ${area}`;
    newDiv.append(x,pContainer);
    const mainNode = document.getElementsByClassName('geometry');
    mainNode[0].append(newDiv);

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
    const newDiv = document.createElement('div');
    newDiv.id = "pop-up";
    const x = document.createElement('button');
    x.textContent="X";
    x.id ='x';
    x.addEventListener('click',function (){newDiv.parentElement.removeChild(newDiv)});
    const pContainer = document.createElement('p');
    pContainer.textContent = `El perimetro del triangulo es ${perimetro}`;
    newDiv.append(x,pContainer);
    const mainNode = document.getElementsByClassName('geometry');
    mainNode[0].append(newDiv);
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
    const newDiv = document.createElement('div');
    newDiv.id = "pop-up";
    const x = document.createElement('button');
    x.textContent="X";
    x.id ='x';
    x.addEventListener('click',function (){newDiv.parentElement.removeChild(newDiv)});
    const pContainer = document.createElement('p');
    pContainer.textContent = `El area del triangulo es ${perimetro}`;
    newDiv.append(x,pContainer);
    const mainNode = document.getElementsByClassName('geometry');
    mainNode[0].append(newDiv);
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;   
    const perimetro  = perimetroCirculo(value);
    const newDiv = document.createElement('div');
    newDiv.id = "pop-up";
    const x = document.createElement('button');
    x.textContent="X";
    x.id ='x';
    x.addEventListener('click',function (){newDiv.parentElement.removeChild(newDiv)});
    const pContainer = document.createElement('p');
    pContainer.textContent = `El perimetro del circulo es ${perimetro}`;
    newDiv.append(x,pContainer);
    const mainNode = document.getElementsByClassName('geometry');
    mainNode[0].append(newDiv);

}
function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;   
    const area  = areaCirculo(value);
    const newDiv = document.createElement('div');
    newDiv.id = "pop-up";
    const x = document.createElement('button');
    x.textContent="X";
    x.id ='x';
    x.addEventListener('click',function (){newDiv.parentElement.removeChild(newDiv)});
    const pContainer = document.createElement('p');
    pContainer.textContent = `El area del circulo es ${area}`;
    newDiv.append(x,pContainer);
    const mainNode = document.getElementsByClassName('geometry');
    mainNode[0].append(newDiv);

}