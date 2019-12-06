// comienzan filtros
//obteniendo datos del json

let result = passengers



//filtrado por ROUTE
function routes() {
    result.filter(function (el) {
        if (el.route === "a") {
            return document.getElementById("filter").innerHTML += (el.name + el.number + el.photo + "<br>")

        } else {
            return document.getElementById("filter").innerHTML = ("checked", false);

        }
    }
    )
}

;



//filtrado por STOP
function stopFilter1(){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "1") {
        return document.getElementById("filter").innerHTML+= (el.name + el.number + el.time + "<br>")
    }
})};
console.log(stopFilter1);

function stopFilter2(){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "2") {
        return document.getElementById("filter").innerHTML+= (el.name + el.number + el.time + "<br>")
    }
})};
console.log(stopFilter2);

function stopFilter3(){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "3") {
        return document.getElementById("filter").innerHTML+= (el.name + el.number + el.time + "<br>")
    }
})};
console.log(stopFilter3);

function stopFilter4(){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "4") {
        return document.getElementById("filter").innerHTML+= (el.name + el.number + el.time + "<br>")
    }
})};
console.log(stopFilter4);

function stopFilter5(){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "5") {
        return document.getElementById("filter").innerHTML+= (el.name + el.number + el.time + "<br>")
    }
})};
console.log(stopFilter5);


//FILTRADO POR SHIFT
function shiftM(){
     let elementCheckbox = document.getElementById("checkBoxSM"),
         elementList =  document.getElementById("filter");

     if(elementCheckbox.checked){
        result.filter(function (el) {
            //el es el equivalente al objeto
            if (el.shift === "morning") {
                show()
                elementList.innerHTML+= (el.name + el.time + "<br>")
                
            }
        });
     }else{
        elementList.innerHTML = '';
        document.getElementById("grafics").style.display="none"
        
     }

};


function shiftA(){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.shift === "afternon") {
       
        return document.getElementById("filter").innerHTML+= (el.name + el.time + "<br>")
        
    }
})};
console.log(shiftA);

function show(){
    document.getElementById('grafics').style.display = 'block'
}

function shiftN(){
    result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.shift === "night") {
        return document.getElementById("filter").innerHTML+= (el.name + el.time + "<br>")
    }
})};
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