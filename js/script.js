function init(){
//add your javascrip between these two lines of code

  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  document.getElementById("entrybutton").addEventListener("click", function() {
    const message = input.value;
    alert("Anthony Torres: " + message);
    document.getElementById("textoutput").innerHTML = "New text!";
    output.innerText = message;
  });



}
window.addEventListener('load', init);
