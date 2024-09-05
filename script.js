let planet = [];
planet[0] = {name: "Mercury", inner: true, diameter: 3031.9, color: "#696969"};
planet[1] = {name: "Venus", inner: true, diameter: 7520.8, color: "#b89165"}
planet[2] = {name: "Earth",inner: true, diameter: 7917.5, color: "#5a5b86"}
planet[3] = {name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e"}
planet[4] = {name: "Jupiter", inner: false, diameter: 86881, color:"#f6a049"}
planet[5] = {name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1"}
planet[6] = {name: "Uranus", inner: false, diameter: 31518, color:"#b4d9df"}
planet[7] = {name: "Neptune", inner: false, diameter: 30599, color: "#456eff"}

function listplanets(){
    planet.forEach(p => console.log(p));
}

function avgDiameter(){
let dTotal = 0;    
planet.forEach(p => console.log(p.name, p.diameter))
    planet.forEach(p=>{
        dTotal = p.diameter + dTotal;
    })
    let dAverage = dTotal / planet.length;
    console.log("Average Diameter: " + dAverage);
}

let indexNode = document.querySelector("#index");
let pNameNode = document.querySelector("#pname")
let pInOutNode = document.querySelector("#pinout")
let index = 0;
let planetName = planet[index].name;
let pInOut = "";
let pHeight = (planet[index].diameter * 0.01) + "px";
let dHeigh = document.getElementById("25px").style.transform = "height: " + pHeight;
let pWidth = (planet[index].diameter * 0.01) + "px";
let pColor = planet[index].color;
const screenElement = document.getElementById('div');


let nextNode = document.querySelector("#next");
function nextPlanet(){
    if(index == planet.length){
        buttonNode.disabled = true;
    }
    else{
        index++;
    }
    planetName = planet[index].name;
    pNameNode.innerText = planetName;
    indexNode.innerText = "Index: " + index;
    
    let pInO = planet[index].inner;
    if(pInO === false){
        pInOut = "Outer Planet";
        pInOutNode.innerText = pInOut;
    }
    else{
        pInOut = "Inner Planet";
        pInOutNode.innerText = pInOut;
    }

    // pHeight = (planet[index].diameter * 0.01) + "px";
    // pWidth = (planet[index].diameter * 0.01) + "px";
    // pColor = planet[index].color;
    // pDot.setAttribute("dot", pHeight);
    // pDot.setAttribute("width", pWidth);
    // pDot.setAttribute("background-color", pColor);

}

let previousNode = document.querySelector("#previous");
function previousPlanet(){
    if(index == 0){
        buttonNode.disabled = true;
    }
    else{
        index--;
    }
    planetName = planet[index].name;
    pNameNode.innerText = planetName;
    indexNode.innerText = "Index: " + index;

    let pInO = planet[index].inner;
    if(pInO === false){
        pInOut = "Outer Planet";
        pInOutNode.innerText = pInOut;
    }
    else{
        pInOut = "Inner Planet";
        pInOutNode.innerText = pInOut;
    }
}








