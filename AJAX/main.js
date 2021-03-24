// create aan event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  // console.log('button clicked')
  // create XHR object
  var xhr = new XMLHttpRequest();
  // open - type, url/file, async
  // console.log(xhr)
  xhr.open('get', 'sample.txt',true);
  console.log('ready state: ', xhr.readyState);

  // optional - use for loader
  xhr.onprogress = function(){
    console.log('ready state: ', xhr.readyState);
  }

  // xhr.onload = function() {
  //   if(xhr.status == 200) {
  //     // console.log(this.responseText);
  //   };
  // };

  xhr.onreadystatechange = function(){
    if(this.readyState == 4 && xhr.status == 200){
      console.log(this.responseText);
      document.getElementById('text').innerHTML = this.responseText;
    } else if(this.status = 404){
      document.getElementById('text').innerHTML = 'not found';
    }
  }
    xhr.onerror = function() {
      console.log('request error ...');
    }

  // send request
  xhr.send();
}