let h;
let m;
let s;
let sTimer;
let mTimer;
let hTimer;
let t;
let newX;
let d;
let interval;
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, 0);
}
$('#start').click(function(){ 
  if (d === 0) {
    $('#para1').text(`${leftFillNum(h, 2)} : ${leftFillNum(m, 2)} :${leftFillNum(s, 2)}`)
    newX = 0;
    interval = setInterval(function(){
    newX = newX + 1;
    d = t- newX;
    if(d <= 0){
      $('#stop-sound')[0].play();
      clearInterval(interval);
    }
    hTimer = Math.floor(d/(3600));
    mTimer = Math.floor(d%3600/60);
    sTimer = d%60;
    $('#para1').text(`${leftFillNum(hTimer, 2)} : ${leftFillNum(mTimer, 2)} : ${leftFillNum(sTimer, 2)}`)
  }, 1000)  
  }
});
$('#reset').click(function(){
  h = 0;
  m = 0;
  s = 0;
  $('#para1').text(`${leftFillNum(h, 2)} : ${leftFillNum(m, 2)} :${leftFillNum(s, 2)}`)
  $('#para2').text(`${leftFillNum(h, 2)} : ${leftFillNum(m, 2)} :${leftFillNum(s, 2)}`)
  clearInterval(interval);

})

$('#edit').click(function() {
  $('#set-div').show();
})
$('#set').click(function(){
  h = parseInt($('#set-hour').val());
  m = parseInt($('#set-minute').val());
  s = parseInt($('#set-second').val());
  t = (h*60*60)+(m*60)+s;
  newX = 0;
  d = 0;
  $('#para2').text(`${leftFillNum(h, 2)} : ${leftFillNum(m, 2)} :${leftFillNum(s, 2)}`)
  $('#set-div').hide();
  $('#set-hour').val('0');
  $('#set-minute').val('0');
  $('#set-second').val('0');
  return h, m, s, t, newX
})