//all our sticks
var stick = document.getElementsByClassName("stick");
//counting sticks from left to right
var i = 0;
var j = 0;

//display lose
var lose = document.getElementById("result");
lose.style.display = "none";
//counting max sticks by round
var maxStick = 0 ;
stick[i].addEventListener("click",deletebg);

//function allowing player to remove a stick
function deletebg(){

  if (i<20){

    stick[i].className = stick[i].className.replace(" bg-danger", " bg-success");

    //removing previous click function to avoid spamming on previous sticks
    stick[i].removeEventListener("click",deletebg);
    i++;
    maxStick++;

    //adding click function only if the user clicked on 3 sticks or less
    if (maxStick <3){
      stick[i].addEventListener("click",deletebg);
    }
}

}


//function removing computer's sticks
function winOnly(){

    j=i;
    while (j>4){
      j -=4 ;
    }
    for (j;j<4;j++){
      stick[i].className = stick[i].className.replace(" bg-danger", " bg-success");
      i++;
    }

    stick[i].addEventListener("click",deletebg);
    maxStick=0;
    if (i===20) {
      lose.style.display = "block" ;
    }
}
