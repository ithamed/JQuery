//   name : "Brad",
// var person = {
//   age : 35,
//   email : function() {
//     return "brad@gmail.com";
//   },
//   adress :{
//     street : "5 main street",
//     city : "boston",
//   } ,
//   children : ["briana", "nicolas"]
// }
// var peaple = [
//   {
//     name : "brad",
//     age : 35
//   },
//   {
//     name : "jan",
//     age : 40
//   },
//   {
//     name : "sara",
//     age : 25
//   }
// ];
// person = JSON.stringify(person);
// console.log(person);
// console.log(person.name);
// console.log(person.email());
// console.log(person.adress.street);
// console.log(person.children[0]);
// console.log(peaple[0]);
// console.log(peaple[0].age);
// var output = ''
// for(let i = 0;i < peaple.length;i++) {
  // console.log(peaple[i]);
//   output += '<li>'+peaple[i].name+'</li>';
// };
// document.getElementById('peaple').innerHTML = output;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    var peaple = response.peaple;
    // console.log(response.peaple[2].name);
    var output = ''
    for(let i = 0;i < peaple.length;i++) {
      output += '<li>'+peaple[i].name+'</li>';
    };
    document.getElementById('peaple').innerHTML = output;
  }
};
xhttp.open("GET", "peaple.JSON", true);
xhttp.send();