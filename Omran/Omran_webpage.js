id="demo";
id="smiley";

function RecipeLink() {
    alert("Okay, here is the link!  Ready to receive it?");
    window.open('https://shokugekinosoma.fandom.com/wiki/Roast_Pork,_Just_Kidding');
}
// Function for configuration box, which leads to either alert box or altering source box text.
function RecipeConf() {
    var txt = "No link for you."; // Establish variable for Cancel
    var r = confirm("Warning: the following link contains anime.  Proceed?"); // establish confBox boolean
// 
    if (r == true) {
        RecipeLink();
        document.getElementById("demo").innerHTML = "See source";
    }
    // Replaces entire document with txt - use getElementById instead of document.write!
    else document.getElementById("demo").innerHTML = txt;
}

// Variables moved into the global scope to be used by all functions
var elem;
var pos = 0;
var reverse;
// Function movement establishes variable values from null to not null
function Movement() {
    elem = document.getElementById("smiley");
    elem.style.position = "relative";
    pos = 0;
    // Here is our swapping-out direction boolean
    reverse = false;
    console.log(elem)
    var keyFrame = setInterval(Frame, 5);
}

/* JavaScript has no multithreading browser capabilities and will read each function one at a time.
This means no combined/interworking functions unless they're recursive functions. */
function Frame() {
    /* This checks if we are swapping directions.
    If true, remove pixels from left.  READ BELOW TIPS ABOUT JS BOOLEAN CHECKS!

    If JS boolean is false,
    numerical variable is NaN (Not a number, can be a negative number)
    string isn't empty,
    null or undefined, it's considered "truthy" and not false. */
    if (reverse) {
        pos -= 2;
        elem.style.left = pos + "px";
        // This resets the reverse boolean once the image returns to original position, 0
        if (pos <= 0) reverse = false;
    }
    // If we are not reversing direction, this will increase the position of the image.
    else {
        pos += 2;
        elem.style.left = pos + "px";
        // Once the image reaches its maximum, the reverse boolean is changed, leading into primary if
        if (pos >= 1300) reverse = true;
    }
}
// https://www.w3schools.com/js/js_htmldom_animate.asp
