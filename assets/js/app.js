var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("logoImg").src = "assets/img/logo-pink.png";
     document.getElementById("menu").classList.add("black");
     document.getElementById("header").classList.add("black");
   }
   if(currentScroll<=3){
     document.getElementById("logoImg").src = "assets/img/logo-white.png" ;
     document.getElementById("menu").classList.remove("black");
     document.getElementById("header").classList.remove("black");
   }
   lastScrollTop = currentScroll;
}, false);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("focus", function(){
  document.getElementById("logChange").classList.add("more");
  document.getElementById("moreLogin").style.display = "block";
});
