function createInputValue(){
    const fatherNode = document.querySelector(".Input");
    const inputBox = document.createElement("div")
    inputBox.className = "inputBox";
    const input = document.createElement("input")
    inputBox.appendChild(input);
    const openBracket = document.createElement("img")
    openBracket.src = "openbracket.png"
    openBracket.id = "openBra"
    openBracket.width ="10";
    const closeBracket = document.createElement("img")
    closeBracket.src = "closebracket.png"
    closeBracket.id = "closeBra"
    closeBracket.width ="10";
    if (document.querySelector(".inputBox")!== null){
        var close = document.getElementById("closeBra")
        close.parentNode.removeChild(close);
        fatherNode.appendChild(inputBox);
        fatherNode.appendChild(closeBracket);
    }
    else{
        fatherNode.appendChild(openBracket);
        fatherNode.appendChild(inputBox);
        fatherNode.appendChild(closeBracket);
    }
}