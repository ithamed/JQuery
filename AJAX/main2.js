document.getElementById('button1').addEventListener('click', loadUser);;
document.getElementById('button2').addEventListener('click', loadUsers);;
function loadUser(){
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'user.JSON', true)
  xhr.onload = function() {
    if(this.status == 200){
      var user = JSON.parse(this.responseText);
      // console.log(this.responseText)
      // console.log(user.name);
      var output = '';

      output +='<ul>'+
        '<li>id: '+user.id+'</li>'+
        '<li>id: '+user.name+'</li>'+
        '<li>id: '+user.email+'</li>'+
      '</ul>'
      document.getElementById('user').innerHTML = output;
    }
  }
  xhr.send();
}

function loadUsers(){
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'ssers.JSON', true)
  xhr.onload = function() {
    if(this.status == 200){
      var users = JSON.parse(this.responseText);
      // console.log(this.responseText)
      // console.log(user.name);
      var output = '';
      for(var i in users){
        output +='<ul>'+
          '<li>id: '+users[i].id+'</li>'+
          '<li>id: '+users[i].name+'</li>'+
          '<li>id: '+users[i].email+'</li>'+
        '</ul>'

      }
      document.getElementById('users').innerHTML = output;
    }
  }
  xhr.send();
}