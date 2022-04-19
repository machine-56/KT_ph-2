var mob = document.getElementById("mob");
var email = document.getElementById("email");
var myInput = document.getElementById("password");
var resub = document.getElementById("resub");
var progress = document.getElementById("progbar");

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

var err = document.getElementById("err")
var str = document.getElementById("password");


//for pop-up and error border clearing
myInput.onfocus = function(){
    document.getElementById("message").style.display = "block";
    myInput.classList.remove("errborder");
    myInput.classList.add("border");
  }
// password red -  green colour change, return myInput to Count() and pdtest1()
myInput.onkeyup = function(){
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.trim().match(lowerCaseLetters)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }
  else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.trim().match(upperCaseLetters)){
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  }
  else{
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.trim().match(numbers)){
    number.classList.remove("invalid");
    number.classList.add("valid");
  }
  else{
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.trim().length >= 8){
    length.classList.remove("invalid");
    length.classList.add("valid");
  }
  else{
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  Count(myInput.value)
  pdtest1(myInput.value)

}

//password feild 2 error border removal
resub.onfocus = function(){
    resub.classList.remove("errborder");
    resub.classList.add("border");
}
//message that say password doesn't match
resub.onkeyup = function(){
    if(myInput.value != resub.value){
      resub.classList.remove("border");
      resub.classList.add("errborder");
      err.innerHTML = "Password doesn't match";
      err.style.color = 'red';
    }
    else{
      resub.classList.remove("errborder");
      resub.classList.add("border");
      err.innerHTML = "";
    }
}
//error border removal phone number
mob.onfocus = function(){
    mob.classList.remove("errborder");
    mob.classList.add("border");
}
//error border removal email
email.onfocus = function(){
    email.classList.remove("errborder");
    email.classList.add("border");
}

//password progress bar  (donn't touch it)
function Count(str){
   //var for strength
   var upper = 0;
   var lower = 0;
   var number = 0;
   var special = 0;
   var len = 0;
   for (var i = 0; i < str.length; i++){
       if(str.length>=8){
           len=2;
           i1=1;
        }
        if (str[i] >= "A" && str[i] <= "Z"){
           upper++;
           i2=1;
        }
        else if (str[i] >= "a" && str[i] <= "z"){
           lower++;
           i3=1;
        }
        else if (str[i] >= "0" && str[i] <= "9"){
           number++;
           i4=1;
        }
        else{
           special++;
        }
    }
   //live indication
   var mtr = upper+lower+number+special+special+len;
   if(mtr<1){
       progress.style.width = '0%';
    }
   else if(mtr<3){
       progress.style.width = '10%';
       progress.style.backgroundColor = '#ff1d0e';
    }
   else if(mtr>=3&&mtr<=6){
       progress.style.width = '20%';
       progress.style.backgroundColor = '#FF4110';
    }
   else if(mtr>=7&&mtr<10){
       progress.style.width = '30%';
       progress.style.backgroundColor = 'Ff751d';
    }
   else if(mtr>=10&&mtr<12){
       progress.style.width = '40%';
       progress.style.backgroundColor = '#Ffac18';
    }
   else if(mtr>=12&&mtr<15){
       progress.style.width = '50%';
       progress.style.backgroundColor = '#F9bc12';
    }
   else if(mtr>=15&&mtr<18){
       progress.style.width = '60%';
       progress.style.backgroundColor = '#Fdd500';
    }
   else if(mtr>=18&&mtr<20){
       progress.style.width = '70%';
       progress.style.backgroundColor = '#Ccfd00';
    }
   else if(mtr>=20&&mtr<23){
       progress.style.width = '80%';
       progress.style.backgroundColor = '#7dfb21';
    }
   else if(mtr>=23&&mtr<26){
       progress.style.width = '90%';
       progress.style.backgroundColor = '#53f707';
    }
   else if(mtr>=26){
       progress.style.width = '100%';
       progress.style.backgroundColor = '#41c504';
    }
}

//password madatory test 
function pdtest1(str){
    //var for validation
    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var i4 = 0;
    //var for strength
    var upper = 0;
    var lower = 0;
    var number = 0;
    var special = 0;
    var len = 0;
    for (var i = 0; i < str.length; i++){
        if(str.length>=8){
            len=2;
            i1=1;
        }
        if (str[i] >= "A" && str[i] <= "Z"){
          upper++;
          i2=1;
        }
        else if (str[i] >= "a" && str[i] <= "z"){
          lower++;
          i3=1;
        }
        else if (str[i] >= "0" && str[i] <= "9"){
          number++;
          i4=1;
        }
        else{
          special++;
        }
    }
    var testvalue = i1+i2+i3+i4;
    if(testvalue==4){
        myInput.classList.remove("errborder");
        myInput.classList.add("border");
        err.innerHTML = '';
    }
    else{
        myInput.classList.remove("border");
        myInput.classList.add("errborder"); 
        err.innerHTML = "Format doesn't match requirement";
        err.style.color = 'red';
    }
}

//Sub functions (mandatory for main)

//test phone number (mandatory)
function ph(){
    //regular expression phone number
    var regmob1 = /^\d{3}\ \d{3}\ \d{4}$/;
    var regmob2 = /^\d{3}\.\d{3}\.\d{4}$/;
    var regmob3 = /^\d{3}\-\d{3}\-\d{4}$/;
    if(regmob1.test(mob.value) || regmob2.test(mob.value)||regmob3.test(mob.value)){
      console.log('success phone'); //remove later
      return true;
    }
    else{
        mob.classList.remove("border");
        mob.classList.add("errborder");
      return false;
    }
}
//test email (mandatory)
function em(){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
      console.log('success email');  //remove later
      return true;
    }
    else{
        email.classList.remove("border");
        email.classList.add("errborder");
      return false;
    }
}
//compare both field of password
function pd(){
    if(myInput.value != resub.value){
      console.log('fail password');  //remove later
      return false;
    }
    else{
        resub.classList.remove("border");
        resub.classList.add("errborder");
      return true;
    }
}
  
//main function 
function main(){
    if(ph() && em() && pd()){
      console.log('all confirmed');
      return true;
    }
    else{
      console.log('something missing')
      return false;
    }
}
  