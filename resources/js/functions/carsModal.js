var modal = document.getElementById("myModal");
var btn = document.getElementById("btn-open-modal");
var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
    searchCarByLicencePlate();
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function searchCarByLicencePlate() {
    const carPlate = document.getElementById("car-plate").value;           
    var carsList = [ {
           marca: "BMW",
           modelo : "Z4 coup",
           ano: "2007",
           cor: "laranja",
           placa: "NEJ-6420"
       }, {
           marca: "Honda",
           modelo : "Accord Coupe EX",
           ano: "1991",
           cor: "Preto",
           placa: "NEJ-5085"
       }, {
           marca: "Peugeot",
           modelo : "207 Sedan Passion XR 1.4 Flex 8V 4p",
           ano: "2009",
           cor: "Bege",
           placa: "NES-0659"
       }, {
           marca: "Fiat",
           modelo : "MOBI Like 1.0 Fire Flex 5p.",
           ano: "2017",
           cor: "Cinza",
           placa: "NEP-1151"
       }, {
           marca: "Ford",
           modelo : "Ranger XLS 3.2 20V 4x4 CD Diesel Mec.",
           ano: "2013",
           cor: "Verde",
           placa: "NFA-5128"
       },
    ]

    var car = carsList.filter(c => c.placa === carPlate)[0];
    var carData = '<li>'+car.marca+'</li> <li>'+car.cor+'</li> <li>'+car.ano+'</li> <li>'+car.modelo+'</li> <li>'+car.placa+'</li>';
    document.getElementById("car-data").innerHTML = carData;        
}
