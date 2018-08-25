var stick = document.getElementsByClassName("stick");
var i = 0;

stick[i].addEventListener("click",deletebg);

function deletebg(){
  stick[i].className = stick[i].className.replace(" bg-danger", " bg-success");
  stick[i].removeEventListener("click",deletebg);
  i++;
  stick[i].addEventListener("click",deletebg);

}
