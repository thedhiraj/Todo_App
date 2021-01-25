/** @format */

var form = document.querySelector("#userForm");
var userInput = document.querySelector("#userName");
var userPass = document.querySelector("#userPassword");
var cuserPass = document.querySelector("#cuserPassword");
var userBtn = document.querySelector("#submitBtn");

// userBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event);
//   console.log("you clicked");
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //  check for emptyness
  requiredError(userInput, "nameError", "Please enter Bla bla ..");
  // check for password match

  if (
    requiredError(userPass, "passError", "Please enter Password") &&
    requiredError(cuserPass, "cpassError", "Please enter confirm  Password")
  ) {
    console.log("1 password empty");
  } else {
    passwordMatchError(
      userPass,
      cuserPass,
      "passError",
      "cpassError",
      "Password Dont Match"
    );
  }

  // if (userPass.value == "") {
  //   requiredError(userPass, "passError", "enter Password");
  // }
});

function requiredError(el, smallId, msg) {
  if (el.value == "") {
    el.classList.add("is-invalid");
    document.getElementById(smallId).innerText = msg;
    return true;
  }
  return false;
}

function passwordMatchError(el1, el2, el1SmallId, el2SmallId, msg) {
  if (el1.value !== el2.value) {
    el1.classList.add("is-invalid");
    el2.classList.add("is-invalid");
    document.getElementById(el1SmallId).innerText = msg;
    document.getElementById(el2SmallId).innerText = msg;
    console.log("pass do not match");
    return false;
  }
  return true;

  //   city = ['pune','aurangabad']
  //   areaName = [{city:'pune', areaName:'hadpasar'},{city:'pune', areaName:'viman Nagar'}]
}
// var userInput = document.getElementById("userName");
