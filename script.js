//start visitors form
function myFunction() {
  var userName = document.querySelector("#userInput");
          var greeting = document.querySelector("#message");
           message.innerHTML = "<i>" + "You are almost there " +  userName.value +
          " enter your deatails below";
       }
//end visitors form 




var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function displayAkanName() {
  var gender = document.getElementsByName("gender");
  if (document.akanName.year.value == "" || document.akanName.year.value.length != 4 || document.akanName.year.value >2100 || document.akanName.year.value <= 1900) {
    alert("Invalid!, Plese enter a valid year");
    document.akanName.year.reach();
    return false;
  } else if (document.akanName.month.value == "" || isNaN(document.akanName.month.value) ||
    document.akanName.month.value.length != 2 || document.akanName.month.value > 12 || document.akanName.month.value <= 0) {
    alert("Invalid month! Enter correct month for example 06");
    document.akanName.month.reach();
    return false;
  } else if (document.akanName.date.value == "" || isNaN(document.akanName.month.value) ||
    document.akanName.month.value.length != 2 || document.akanName.date.value > 31 || document.akanName.date.value <= 0) {
    alert("Invalid date of birth! Enter correct date example 21");
    document.akanName.day.reach();
    return false;
  } else if (gender[0].checked == false && gender[1].checked == false) {
    alert("please choose your gender");
    return false;
  } else {
    return true;
  }

}

function calculateDayValue() {
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0, 2));
  YY = parseInt(year.substring(2, 4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  console.log(d);
  return (Math.floor(d));
}

function getGender() {
  var gender = document.getElementsByName("gender");
  if (gender[0].checked == true) {
    var gender = "male";
  } else if (gender[1].checked == true) {
    var gender = "female";
  } else {
    return false;
  }

  switch (gender) {
    case "male":
      if (dayValue == 1) {
        alert("Hi, you were born on " + dayNames[0] + " ,Your Akan name is " + maleNames[0] + "!");
      } else if (dayValue == 2) {
        alert("Hi, you were born on " + dayNames[1] + " ,Your Akan name is " + maleNames[1] + "!");
      } else if (dayValue == 3) {
        alert("Hi, you were born on " + dayNames[2] + " ,Your Akan name is " + maleNames[2] + "!");
      } else if (dayValue == 4) {
        alert("Hi, you were born on " + dayNames[3] + " ,Your Akan name is " + maleNames[3] + "!");
      } else if (dayValue == 5) {
        alert("Hi, you were born on " + dayNames[4] + " ,Your Akan name is " + maleNames[4] + "!");
      } else if (dayValue == 6) {
        alert("Hi, you were born on " + dayNames[5] + " ,Your Akan name is " + maleNames[5] + "!");
      } else if (dayValue == -0) {
        alert("Hi, you were born on " + dayNames[6] + " ,Your Akan name is " + maleNames[6] + "!");
      }
      break;
    case "female":
      if (dayValue == 1) {
        alert("Hi, you were born on " + dayNames[0] + " ,Your Akan name is  " + femaleNames[0] + "!");
      } else if (dayValue == 2) {
        alert("Hi, you were born on " + dayNames[1] + " ,Your Akan name is " + femaleNames[1] + "!");
      } else if (dayValue == 3) {
        alert("Hi, you were born on " + dayNames[2] + " ,Your Akan name is " + femaleNames[2] + "!");
      } else if (dayValue == 4) {
        alert("Hi, you were born on " + dayNames[3] + " ,Your Akan name is " + femaleNames[3] + "!");
      } else if (dayValue == 5) {
        alert("Hi, you were born on " + dayNames[4] + " ,Your Akan name is " + femaleNames[4] + "!");
      } else if (dayValue == 6) {
        alert("Hi, you were born on " + dayNames[5] + " ,Your Akan name is " + femaleNames[5] + "!");
      } else if (dayValue == -0) {
        alert("Hi, you were born on " + dayNames[6] + " ,Your Akan name is " + femaleNames[6] + "!");
      }
      break
    default:

  }

}

function obtainName() {
  dayValue = calculateDayValue();
  getGender();
} 