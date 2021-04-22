console.log(document.getElementsByClassName('top-left'));
if (document.getElementsByClassName('top-left') == null) {
   document.getElementsByClassName('top-left')[0].onclick = function(){
      location.href= 'pages/business-traveler.html'
   }
}

document.getElementsByClassName('top-right')[0].onclick = function(){
   location.href= 'pages/dinner.html'
 }
document.getElementsByClassName('bottom-left')[0].onclick = function(){
   location.href= 'pages/private-dining.html'
 }
document.getElementsByClassName('bottom-right')[0].onclick = function(){
   location.href= 'pages/weekends-families.html'
 }
document.getElementsByClassName('logo')[0].onclick = function(){
   location.href= 'index.html'
}
