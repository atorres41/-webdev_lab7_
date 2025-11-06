function init(){
//add your javascrip between these two lines of code


  document.getElementById("entrybutton").addEventListener("click", function() {
    alert("Hello World!");
    document.getElementById("textoutput").innerHTML = "New text!";
  });



}
window.addEventListener('load', init);
