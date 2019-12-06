// comienzan filtros
//obteniendo datos del json

let result = passengers



//filtrado por ROUTE
function routes(){
 result.filter(function (el) {
    if(el.route === "a" ){
        return document.getElementById("filter").innerHTML+=(el.name + el.number+"<br>")
    }

    
})};



//filtrado por STOP
let stopFilter1 = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "1") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(stopFilter1);

let stopFilter2 = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "2") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(stopFilter1);

let stopFilter3 = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "3") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(stopFilter1);

let stopFilter4 = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "4") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(stopFilter1);

let stopFilter5 = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "5") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(stopFilter1);


//FILTRADO POR SHIFT
let shiftM = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.shift === "morning") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(shiftM);

let shiftA = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.shift === "afternon") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(shiftA);

let shiftN = result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.shift === "night") {
        return console.log(el.name, el.number, el.time)
    }
});
console.log(shiftN);


//filtrado por nombre
let names = result.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })    
;
console.log(names);

/* 
//filtrado por numero
let number = result.sort(function (a, b) {
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })    
;
console.log(number); */