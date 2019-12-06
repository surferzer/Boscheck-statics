// comienzan filtros
//obteniendo datos del json

let result = passengers



//filtrado por ROUTE
function routes() {
    let elementCheckbox4 = document.getElementById("r1"),
    elementList4= document.getElementById("filter");

if(elementCheckbox4.checked){
    result.filter(function (el) {
        if (el.route === "a") {
            elementList4.innerHTML += (el.name + el.number + `<dt><img src=${el.photo} width="50"></dt>` + "<br>")
        }});
        } else {
            elementList4.innerHTML ="";

        }
    };



//filtrado por STOP
function stopFilter1(){
    let elementCheckbox1 = document.getElementById("cbox1"),
    elementList1= document.getElementById("filter");

if(elementCheckbox1.checked){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if(el.stop==="1") {
       elementList1.innerHTML+= (el.name + el.number + el.time + "<br>")
    }});
    }else{
    elementList1.innerHTML = '';
     }};



function stopFilter2(){
    let elementCheckbox2 = document.getElementById("cbox2"),
    elementList2= document.getElementById("filter");

if(elementCheckbox2.checked){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "2") {
      elementList2.innerHTML+= (el.name + el.number + el.time + "<br>")
    }
});
}else{
    elementList2.innerHTML = '';
     }};


function stopFilter3(){
    let elementCheckbox3 = document.getElementById("cbox3"),
    elementList3= document.getElementById("filter");

if(elementCheckbox3.checked){
     result.filter(function (el) {
    //el es el equivalente al objeto
    if (el.stop === "3") {
        elementList3.innerHTML+= (el.name + el.number + el.time + "<br>")
    }
});
}else{
    elementList3.innerHTML = '';
     }};



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