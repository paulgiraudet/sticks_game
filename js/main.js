//all our sticks
var stick = document.getElementsByClassName("stick");
//counting sticks from left to right
var i = 0;
//used to make the computer win every time
var j = 0;

//display lose
var lose = document.getElementById("result");

//counting max sticks by round
var maxStick = 0 ;
stick[i].addEventListener("click",nextStick);

//function allowing player to remove a stick
function nextStick(){

  if (i<16){

    rotateStick(i);
    //removing previous click function to avoid spamming on previous sticks
    stick[i].removeEventListener("click",nextStick);
    //incrementing i count plus max stick
    maxStick++;

    //adding click function only if the user clicked on 3 sticks or less
    if (maxStick <3){
      stick[i].addEventListener("click",nextStick);
    }
}
//display lose if you pick the last stick
else if (i===16){
  lose.innerHTML = "TRY AGAIN" ;
  lose.addEventListener("click",restart);
}
}

function restart(){
  lose.removeEventListener("click",restart);
  for (i;i>=0;i--){
    stick[i].style.transform = "rotate(0deg)";
  }
  i=0;
  lose.innerHTML = "End of Turn";
  stick[i].addEventListener("click",nextStick);
}

//function removing computer's sticks
function winOnly(){

    //saving i value in a new value
    j=i;
    //the solution for this game is that after both turns the count of stick needs
    //to be 4 so the computer wins everytime

    //here we just need j to be between 1 and 3 to make the game work
    while (j>4){
      j -= 4 ;
    }

    //allowing computer to pick 1,2 or 3 sticks
    for(j;j<4;j++){
      rotateStick(i);
    }

    //adding click function to the next stick after the computer played
    stick[i].addEventListener("click",nextStick);
    //resetting maxSticks to permit player to play and click on sticks
    maxStick=0;
}

function rotateStick(n){
    stick[i].style.transform = "rotate(22deg)";
    i++;
}
