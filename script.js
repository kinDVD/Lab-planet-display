let planets = [
    {name: "Sun", inner: true, diameter: 865370, color: "#FFFF00"},
    {name: "Mercury", inner: true, diameter: 3031.9, color:"#696969"},
    {name: "Venus" , inner: true, diameter: 7520.8, color: "#b89165"},
    {name: "Earth" , inner: true, diameter: 7917.5, color: "#5a5b86"},
    {name: "Mars" , inner: true, diameter: 4212.3, color: "#df8c4e"},
    {name: "Jupiter" , inner: false, diameter: 86881, color: "#f6a049"},
    {name: "Saturn" , inner: false, diameter: 72367, color: "#dcd3a1"},
    {name: "Uranus" , inner: false, diameter: 31518, color: "#b4d9df"},
    {name: "Neptune" , inner: false, diameter: 30599, color: "#456eff"},
    {name: "Pluto", inner: false, diameter: 1476, color: "#ccba99"}
];

let indexNode = document.querySelector("#index");
let index = 0;
let nameNode = document.querySelector("#name");
let innerNode = document.querySelector("#inner");
let visualNode = document.querySelector("#visual");
let previousNode = document.querySelector("#previous");
let nextNode = document.querySelector("#next");
updatePlanetDisplay();


function changeIndex(val){
    index += val;
    if(index < 0){
        index = 0;
    }
    else if (index >= planets.length){
        index = planets.length - 1;
    }
    indexNode.innerText = `index: ${index}`;
    updatePlanetDisplay();
}

function updatePlanetDisplay(){
    nameNode.innerText = planets[index].name;
    if(planets[index].inner === true){
        innerNode.innerText = "Inner Planet";
    }
    else{
        innerNode.innerText = "Outer Planet";
    }
    visualNode.style.backgroundColor = planets[index].color;
    visualNode.style.height = (planets[index].diameter / 100) + "px";
    visualNode.style.width = (planets[index].diameter / 100) + "px";
    //disable button
    if(index == 0){
        previousNode.disabled = true;
        nextNode.disabled = false;
    }
    else if(index == planets.length - 1){
        previousNode.disabled = false;
        nextNode.disabled = true;
    }
    else{
        previousNode.disabled = false;
        nextNode.disabled = false;
    }
}