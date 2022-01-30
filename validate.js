let pwd=document.getElementById("exampleInputPassword1");
let cpwd=document.getElementById("exampleConfirmPassword1");
let email=document.getElementById("exampleInputEmail");

let phoneno=document.getElementById("phoneno");
var password1 = document.getElementById("password1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
// phone no validation
// When the user clicks on the phone no field, show the message box
phoneno.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the phone no field, hide the message box
phoneno.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the phoneno field
function validatePhoneno() {
  // Validate numbers
  var numbers = /[0-9]/g;
  if(phoneno.value.match(numbers)) {  

    phoneno.setCustomValidity(' ');
  }
  else{
    phoneno.setCustomValidity("Phone number should contain numbers only!");

  }
// validate length
  if(phoneno.value.length < 10) {
    phoneno.setCustomValidity("Phone number should contain 10 digits!");
  }
  else if(phoneno.value.length > 10){
    phoneno.setCustomValidity("Phone number should contain 10 digits only!");
   
  } 
  else if(phoneno.value.length == 10) {
    phoneno.setCustomValidity(' ');
}
}

 phoneno.onsubmit = validatePhoneno;



// When the user clicks on the password field, show the message box
pwd.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pwd.onblur = function() {
  document.getElementById("message").style.display = "none";
}


// password validation
// When the user starts to type something inside the password field
pwd.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(pwd.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } 
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(pwd.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(pwd.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(pwd.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
function validatePassword(){
    if(pwd.value != cpwd.value) {
      cpwd.setCustomValidity("Passwords Don't Match");
    } else {
      cpwd.setCustomValidity('');
    }
    
  }
  
  pwd.onchange = validatePassword;
  cpwd.onkeyup = validatePassword;

  // password strength meter
  $(function() {
    $.fn.bootstrapPasswordMeter = function(options) {
      var settings = $.extend({
        minPasswordLength: 8,
        level0ClassName: 'progress-bar-danger',
        level0Description: 'Weak',
        level1ClassName: 'progress-bar-danger',
        level1Description: 'Not great',
        level2ClassName: 'progress-bar-warning',
        level2Description: 'Better',
        level3ClassName: 'progress-bar-success',
        level3Description: 'Strong',
        level4ClassName: 'progress-bar-success',
        level4Description: 'Very strong',
        parentContainerClass: '.form-group'
      }, options || {});
  
      $(this).on("keyup", function() {
        var progressBar = $(this).closest(settings.parentContainerClass).find('.progress-bar');
        var progressBarWidth = 0;
        var progressBarDescription = '';
        if ($(this).val().length >= settings.minPasswordLength) {
          var zxcvbnObj = zxcvbn($(this).val());
          progressBar.removeClass(settings.level0ClassName)
            .removeClass(settings.level1ClassName)
            .removeClass(settings.level2ClassName)
            .removeClass(settings.level3ClassName)
            .removeClass(settings.level4ClassName);
          switch (zxcvbnObj.score) {
            case 0:
              progressBarWidth = 25;
              progressBar.addClass(settings.level0ClassName);
              progressBarDescription = settings.level0Description;
              break;
            case 1:
              progressBarWidth = 25;
              progressBar.addClass(settings.level1ClassName);
              progressBarDescription = settings.level1Description;
              break;
            case 2:
              progressBarWidth = 50;
              progressBar.addClass(settings.level2ClassName);
              progressBarDescription = settings.level2Description;
              break;
            case 3:
              progressBarWidth = 75;
              progressBar.addClass(settings.level3ClassName);
              progressBarDescription = settings.level3Description;
              break;
            case 4:
              progressBarWidth = 100;
              progressBar.addClass(settings.level4ClassName);
              progressBarDescription = settings.level4Description;
              break;
          }
        } else {
          progressBarWidth = 0;
          progressBarDescription = '';
        }
        progressBar.css('width', progressBarWidth + '%');
        progressBar.text(progressBarDescription);
      });
    };
    $('#exampleInputPassword1').bootstrapPasswordMeter({minPasswordLength:3});
  });

  