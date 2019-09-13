document.addEventListener('DOMContentLoaded', domloaded, false);
function domloaded() {
  //Script to display Canvas for cafe-name is run when the dom content has loaded
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "30px Georgia";
  var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
  gradient.addColorStop("0", "mediumturquoise");
  gradient.addColorStop("0.5", "fuchsia");
  gradient.addColorStop("1.0", "indigo");

  ctx.strokeStyle = gradient;
  ctx.strokeText("Salki's Noms", 10, 50);
}

//Creates a cookie by asking for username, then how long the cookie should exist in your machine
function createCookie(cookieName, cookieValue, daysToExpire) {
  var date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}


//Function to return the content of the cookie
function accessCookie(cookieName) {
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(';');
  for (var i = 0; i < allCookieArray.length; i++) {
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name) == 0)
      return temp.substring(name.length, temp.length);
  }
  return "";
}

//Function run to check cookie
//If cookie exists it uses the accessCookie() function to get cookie information and alert the user.
//If cookie doesn't exist then it prompts the user for input, if input is valid then it will run the createCookie() function
function checkCookie() {
  setLinksOthers();
  var user = accessCookie("testCookie");
  if (user != "")
    alert("Welcome Back " + user + "! Ready for your favorite treat?");
  else {
    user = prompt("Hello! This seems to be your first time here. Please enter your name");
    num = prompt("How many days you want to store your name on your computer?");
    if (user != "" && user != null) {
      createCookie("testCookie", user, num);
      alert("Cookie created");
    }
  }
}

//Uses cookie, if it exists, to auto-generate the nickname field in the review form
function fillInForm() {
  var user = accessCookie("testCookie");
  if (user != "") {
    document.review.nickname.value = user;
  }
}

//Prompts user for additonal information before changing text on the page in response to their input in the prompt		
function moreInfo() {
  var txt;
  var more = prompt("Anything else you'd like to tell us? Here's your chance!");
  if (more == null || more == "" || more == "no") {
    txt = "Thank you for the basic review! Keeping it simple is okay!";
  } else {
    txt = "Thank you for giving more details!";
  }
  document.getElementById("more").innerHTML = txt;
  //Defines a var with the value of the 'nickname' item in the "review" form
  var name = document.getElementById("review").elements[0].value;
  //Lines 70-81: Defines a var with the value of the 'menuitem' item in the "review form"
  var item;
  //Must check if each radio button is checked, if it is then give item the value of that radio button
  if (document.getElementById("review").elements[1].checked) {
    item = "Cat Cookies"
  } else if (document.getElementById("review").elements[2].checked) {
    item = "Rainbow Waffles"
  } else if (document.getElementById("review").elements[3].checked) {
    item = "Mini Breakfast"
  } else if (document.getElementById("review").elements[4].checked) {
    item = "Bear Sundae"
  } else {
    item = "Pusheen Macarons"
  }
  //Defines a var with the value of the 'rating' item in the "review" form
  var rating = document.getElementById("review").elements[6].value;

  alert("The form was submitted! Thank you " + name + " for giving " + item + " a rating of " + rating + "!");
}
