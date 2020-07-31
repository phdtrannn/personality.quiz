//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var hiphopScore = 0;
var rnbScore = 0;
var popScore = 0;
var countryScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById ("q1a2");
var q1a3 = document.getElementById ("q1a3");
var q1a4 = document.getElementById ("q1a4");

var q2a1 = document.getElementById ("q2a1");
var q2a2 = document.getElementById ("q2a2");
var q2a3 = document.getElementById ("q2a3");
var q2a4 = document.getElementById ("q2a4");

var q3a1 = document.getElementById ("q3a1");
var q3a2 = document.getElementById ("q3a2");
var q3a3 = document.getElementById ("q3a3");
var q3a4 = document.getElementById ("q3a4");


var result = document.getElementById ("result");

var restart = document.getElementById ("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", hiphop);
q1a1.addEventListener("click", disable1);
q1a2.addEventListener("click", rnb);
q1a2.addEventListener("click", disable1);
q1a3.addEventListener("click", pop);
q1a3.addEventListener("click", disable1);
q1a4.addEventListener("click", country);
q1a4.addEventListener("click", disable1);

q2a1.addEventListener("click", country);
q2a1.addEventListener("click", disable2);
q2a2.addEventListener("click", rnb);
q2a2.addEventListener("click", disable2);
q2a3.addEventListener("click", hiphop);
q2a3.addEventListener("click", disable2);
q2a4.addEventListener("click", pop);
q2a4.addEventListener("click", disable2);

q3a1.addEventListener("click", country);
q3a1.addEventListener("click", disable3);
q3a2.addEventListener("click", pop);
q3a2.addEventListener("click", disable3);
q3a3.addEventListener("click", rnb);
q3a3.addEventListener("click", disable3);
q3a4.addEventListener("click", hiphop);
q3a4.addEventListener("click", disable3);

restart.addEventListener("click", restartQuiz);

//#TODO: Define quiz functions here
function hiphop() {
  hiphopScore +=1;
  questionCount +=1;
  if (questionCount = 3){
    updateResult();
  }
}

function rnb() {
  rnbScore +=1;
  questionCount +=1;
  if (questionCount = 3){
    updateResult();
  }
}

function pop() {
  popScore +=1;
  questionCount +=1;
  if (questionCount = 3){
    updateResult();
  }  
}

function country() {
  countryScore +=1;
  questionCount +=1;
  if (questionCount = 3){
    updateResult();
  } 
}

//disable extension
function disable1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disable2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disable3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

function updateResult() {
  if (hiphopScore>=2) {
  result.innerHTML = "Hip-Hop";
  }
  else if (rnbScore>=2) {
  result.innerHTML = "R&B";
  }
  else if (popScore>=2) {
  result.innerHTML = "Pop";
  }
  else if (countryScore>=2) {
  result.innerHTML = "Country";
  }
  else {result.innerHTML = "It seems that any music fits your style.";  
  } 
}

function restartQuiz() {
  var questionCount = 0;
  var hiphopScore = 0;
  var rnbScore = 0;
  var popScore = 0;
  var countryScore = 0;
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  result.innerHTML = "Your result is...";
}