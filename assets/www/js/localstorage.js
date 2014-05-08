function clickCountLS(){

var note1 = '<i>Now try close this app and kill it from running program and re-run. You can see that this counter is <b>not reset</b></i>';

if(typeof(Storage)!=="undefined") {
  if (localStorage.clickcount) {
    localStorage.clickcount=Number(localStorage.clickcount)+1;
    }
  else    {
    localStorage.clickcount=1;
    }
  document.getElementById("result").innerHTML="You have clicked the button " + localStorage.clickcount + " time(s).";
  document.getElementById("note1").innerHTML=note1;
  }
else {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
  }
}


function clickCountSS(){

var note2 = '<i>If you close this app and kill it from running program and re-run. This counter will reset, as it only store data only in current session. Try it.</b></i>';

if(typeof(Storage)!=="undefined")
  {
  if (sessionStorage.clickcount) {
    sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
    }
  else {
    sessionStorage.clickcount=1;
    }
  document.getElementById("resultSS").innerHTML="You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
  document.getElementById("note2").innerHTML=note2;
  }
else {
  document.getElementById("resultSS").innerHTML="Sorry, your browser does not support web storage...";
  }
}