$(document).ready(function() {
  $('#btn').click(function(){
    if($('#name').val() == '') {
      $('#country, #sugestion, #advice, #gif, #wiki').empty();
      $('#country').append('<p><strong>please fill the search field.</strong></p>')
      $('#country').css('display', 'block');
      $('#sugestion, #advice, #gif, #wiki').css('display', 'none');
      return false
    } else{
      country();
      activity();
      advice();
      gif();
      wiki()
    }
  })
  function country(){
    let myRequest = new XMLHttpRequest();
    let naam = $('#name').val();
    console.log(naam)
    let url = `https://api.nationalize.io?name=${naam}`;
    myRequest.open('GET', url);
    myRequest.responseType= 'json';
    myRequest.onreadystatechange = function() {
      if (myRequest.readyState === 4) {
        let userData = myRequest.response;
        console.log(userData);
        userData.country.forEach(element => {
          $('#country').append("<ul><li>you are from <span>"+element.country_id+"</span> with probability: <span>"+((element.probability)*100).toPrecision(3)+"%</span></li></ul>")
        });
      }
    }
    $('#country').css('display', 'block');
    $('#country').empty();
    myRequest.send();
  }
  function activity() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://www.boredapi.com/api/activity/');
    myRequest.responseType= 'json';
    myRequest.onreadystatechange = function() {
      if (myRequest.readyState === 4) {
        let userData = myRequest.response;
        console.log(userData);
        $('#sugestion').append("<p>We have some suggested activity for you:</p><p>"+userData.activity+"</p>")
      }
    }
    $('#sugestion').css('display', 'block');
    $('#sugestion').empty();
    myRequest.send();
  }
  function advice() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.adviceslip.com/advice');
    myRequest.responseType= 'json';
    myRequest.onreadystatechange = function() {
      if (myRequest.readyState === 4) {
        let userData = myRequest.response;
        console.log(userData);
        $('#advice').append("<p>And also a slip advice:</p><p>"+userData.slip.advice+"</p>")
      }
    }
    $('#advice').css('display', 'block');
    $('#advice').empty();
    myRequest.send();
  }
  function gif() {
    let myRequest = new XMLHttpRequest();
    let naam = $('#name').val();
    myRequest.open('GET', 'https://api.tenor.com/v1/search?q='+naam+'&key=LIVDSRZULELA&limit=12');
    myRequest.responseType= 'json';
    myRequest.onreadystatechange = function() {
      if (myRequest.readyState === 4) {
        let userData = myRequest.response;
        console.log(userData);
        $('#gif').append('<p>There are some gif relevant to your name:</p>')
        userData.results.forEach(element => {
          $('#gif').append("<img src=" + element.media[0].gif.url + " alt=img-alt />")
        });
      };
    };
    $('#gif').css('display', 'block');
    $('#gif').empty();
    myRequest.send();
  }
  function wiki() {
    let myRequest = new XMLHttpRequest();
    let naam = $('#name').val();
    myRequest.open('GET', 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='+naam);
    myRequest.responseType= 'json';
    myRequest.onreadystatechange = function() {
      if (myRequest.readyState === 4) {
        let userData = myRequest.response;
        console.log(userData);
        $('#wiki').append('<p>There are some link from Wiki Pedia relevant to your search. With clicking on them you can read more:</p>')
        $('#wiki').append('<ol></ol>')
        for(let i = 0; i < userData[1].length; i++) {
          $('ol').append(`<li><a href="${userData[3][i]}">${userData[1][i]}</a></li>`)
        };
      };
    };
    $('#wiki').css('display', 'block');
    $('#wiki').empty();
    myRequest.send();
  }
})

