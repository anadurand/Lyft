window.addEventListener("load", function(){
  var submit = document.getElementById("submit");
  submit.addEventListener("click",function(e){
    e.preventDefault();
    validarForm();
  });

});
