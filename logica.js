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
            document.getElementById("container").style.display="block"
            elementList4.innerHTML += (`<tr><img src=${el.photo} width="60"></tr>` +"<tr>   |   </tr>"+  `<td><tr>${el.number}</tr></td>`+"<tr>   |   </tr>"+ `<td><tr>${el.name}</tr></td>` +"<tr>   |   </tr>"+  `<td><tr>${el.stop}</tr></td>`+"<tr>   |   </tr>"+ `<td><tr>${el.time}</tr></td>`)
        }});
        } else {
            document.getElementById("container").style.display="none"
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
       elementList1.innerHTML+= ("<tr>   |   </tr>"+  `<td><tr>${el.number}</tr></td>`+"<tr>   |   </tr>"+ `<td><tr>${el.name}</tr></td>` +"<tr>   |   </tr>"+ `<td><tr>${el.time}</tr></td>` + "<br>")
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
      elementList2.innerHTML+= ("<tr>   |   </tr>"+  `<td><tr>${el.number}</tr></td>`+"<tr>   |   </tr>"+ `<td><tr>${el.name}</tr></td>` +"<tr>   |   </tr>"+ `<td><tr>${el.time}</tr></td>` + "<br>")
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
        elementList3.innerHTML+= ( `<td><tr>${el.number}</tr></td>`+"<tr>   |   </tr>"+ `<td><tr>${el.name}</tr></td>` +"<tr>   |   </tr>"+ `<td><tr>${el.time}</tr></td>` + "<br>")
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
                document.getElementById("grafics").style.display="block"
                elementList.innerHTML+= ("<tr>   |   </tr>"+  `<td><tr>${el.number}</tr></td>`+"<tr>   |   </tr>"+ `<td><tr>${el.name}</tr></td>` +"<tr>   |   </tr>"+ `<td><tr>${el.time}</tr></td>` + "<br>")
                
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

/* function show(){
    document.getElementById('piechart').style.display = 'block'
} */

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


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Stop 1',   6],
    ['Stop 2',   5],
    ['Stop 3',   3],
    ['Stop 4',   1],
    ['Stop 5',   3]
  ]);

  var options = {
    title: 'Morning',
    'legend':'left',
    'width':400,
    'height':300,
'left': 500};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}


//grafica generall
Highcharts.chart('container', {

    title: {
        text: "Route A"
    },

    subtitle: {
        text: "Stops"
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        }
    },

    series: [{
        name: 'Stop 1',
        data: [8000, 5000, 5000, 1000, 3000]
    }, {
        name: 'Stop 2',
        data: [6000, 4000, 5000, 3000, 3000]
    }, {
        name: 'Stop 3',
        data: [4000, 2000, 6000, 3000, 1000]
    }, {
        name: 'Stop 4',
        data: [7000, 1000, 4000, 3000, 5000]
    }, {
        name: 'Stop 5',
        data: [3000, 1000, 1000, 2000, 2000]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});