var mob = document.getElementById("mob");
var email = document.getElementById("email");
var myInput = document.getElementById("password");
var pwd2 = document.getElementById("pwd2");

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

var err = document.getElementById("err")

var i = 0;
var n = 0;
var m = 0;
var e = 0;
var p = 0;

var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;

var regmob1 = /([0-9]{3}) ([0-9]{3}) ([0-9]{4})/g;
var regmob2 = /([0-9]{3}).([0-9]{3}).([0-9]{4})/g;
var regmob3 = /([0-9]{3})-([0-9]{3})-([0-9]{4})/g;

myInput.onfocus = function(){
    document.getElementById("message").style.display = "block";
    password.classList.remove("errborder");
    password.classList.add("border");
  }
  
myInput.onkeyup = function(){
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    i1+=1;
  }
  else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)){
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    i2+=1;
  }
  else{
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)){
    number.classList.remove("invalid");
    number.classList.add("valid");
    i3+=1;
  }
  else{
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8){
    length.classList.remove("invalid");
    length.classList.add("valid");
    i4+=1;
  }
  else{
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  if(i1>0 && i2>0 && i3>0 && i4>0){
    i=1;
  }
}

pwd2.onkeyup = function(){
  if(myInput.value != pwd2.value){
    err.innerHTML = "Password doesn't match";
    err.style.color = 'red';
    n=0;
  }
  else{
    err.innerHTML = "";
    n=1;
  }
}

mob.onfocus = function(){
  mob.classList.remove("errborder");
  mob.classList.add("border");
}

email.onfocus = function(){
  email.classList.remove("errborder");
  email.classList.add("border");
}
pwd2.onfocus = function(){
  pwd2.classList.remove("errborder");
  pwd2.classList.add("border");
}


function main(){
  if(regmob1.test(mob.value) || regmob2.test(mob.value) || regmob3.test(mob.value)){
    m=1;
  }
  if( (i==1) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) && (m==1)){
    return true;
  }
  if(m!=1){
    mob.classList.remove("border");
    mob.classList.add("errborder");
    return false;
  }
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){
    email.classList.remove("border");
    email.classList.add("errborder");
    return false;
  }
  if(i!=1){
    password.classList.remove("border");
    password.classList.add("errborder");
    return false;
  }
  
}
