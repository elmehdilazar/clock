var h, m,s;
function clock(){
  var date =new Date();
  h =date.getHours();
  m=date.getMinutes();
  s=date.getSeconds();
  


document.getElementById('hour').style.transform= 'rotate(' + (h / 12) * 360 +'deg)';
document.getElementById('min').style.transform= 'rotate(' + (m / 60) * 360 +'deg)';
document.getElementsByClassName('sec').style.transform= 'rotate(' + (s / 60) * 360 +'deg)';



}var f = setInterval(clock,1000);

var elem = document.getElementById("sec");
var deg=0;
 var myfn=function(){
 	deg+=6;
  elem.style.transform=" rotateZ("+deg+"deg)";  
  
}
var t=setInterval(myfn,1000);

function clocknum(){
  var date =new Date();
  h =date.getHours();
  m=date.getMinutes();
  s=date.getSeconds();

document.getElementById("txt").innerHTML=h+":"+m+":"+s;
var s=setTimeout(clocknum,1000);


}
