function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(xmlHttp.responseText);
      }
  }
  xmlHttp.open("GET", theUrl);
  xmlHttp.send();
  return;
}

function tenorCallback_search(responsetext) {
  var response_objects = JSON.parse(responsetext);
  top_10_gifs = response_objects["results"];
  for (let i = 0; i < top_10_gifs.length; i++) {
    let img = document.createElement('img');
    img.src = top_10_gifs[i]["media"][0]["nanogif"]["url"];
    img.style.width = "20%" ;
    img.style.margin = "2%";
    img.style.verticalAlign = "top";
    document.getElementById('pictures').appendChild(img);
  }
  return;
}


function grab_data() {
  var apikey = "LIVDSRZULELA";
  var lmt = 8;
  var search_term = $('input').val();
  var search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
          apikey + "&limit=" + lmt;
  httpGetAsync(search_url,tenorCallback_search);
  return;
}

$('button').click(function(){
  $('#pictures').empty();
  if($('input').val() == '') {
    $('#pictures').append('<p>please fill the search field.</p>')
    return false
  }
  grab_data();
});
