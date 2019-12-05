// comienzan filtros
//obteniendo datos del json

let result = passengers
console.log(result);


//filtrado por ROUTE
let routeA = result.filter(function (el) {
    return (el.route === "a")
});
console.log(routeA);

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