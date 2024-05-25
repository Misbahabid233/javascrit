// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
var character = prompt("Enter any letter  or number  to check whether it is number , uppercase letter or lowercase letter. ")

// write formula for cheaking
 var valueFormula = character.charCodeAt(0);
 if(valueFormula >=65 && valueFormula <=90) {
    alert("It is  in Uppercase!!");
 }
 else if (valueFormula >=97 && valueFormula <=122){
    alert("It is in lowercase!");
 }
 else if (valueFormula >=48 && valueFormula <=57){
    alert("It is a number.");
 }
 else {
    prompt("Enter any letter  or number  to check whether it is number , uppercase letter or lowercase letter.")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var value1 = +prompt("Enter your first number this is show larger");
var value2 = +prompt("Enter your second number");
if (value1 >= value2){
    alert(value1 + "is grater then" + value2);
}
 else if (value1 <= value2){
    alert(value1 + "is larger than the" + value2);
};

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var userNum = +prompt("  Enter any number ti cheak whether the number is positive, negative or zero.");
if (userNum >= 1){
    alert("Its is Positive!");
}
 else if (userNum <= -1){
    alert("Its is Negative!");
}
 else if (userNum = 0){
    alert("Its is  equal to Zero!");
}
else {
    alert("Please enter this number!");
};

// 4. Write a program that takes a character (i.e. string of
    // length 1) and returns true if it is a vowel, false otherwise

 var conformationVowel = prompt("Enter your letter to cheak it is weathwe it is vowel or not! ");
if (conformationVowel == "a" || conformationVowel == "u" || conformationVowel == "e" || conformationVowel == "i" ||conformationVowel == "o" ){
        alert("It is vowel!");
}
else {
    alert("it is not vowel!");
};

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var myPassword = "web development";
var userPassword  = prompt("Enter your password!");
if (userPassword == myPassword){
    alert("Logged in successfully!");
}
else if (userPassword != myPassword){
    alert("Please enter your password to login the site!");
    var userPassword  = prompt("Enter your password!");
    if (userPassword == myPassword){
        alert("Logged in successfully!");
    }
}
else if (userPassword != myPassword) {
    alert ("Please enter the correct password!!");
};

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = +prompt("Enter your number!");
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else{
greeting = "Good evening";
alert(greeting);
};

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// ============================= TIME IN 0000 24H FORMAT =============================
var time = +prompt("Enter the time in 24H format (e.g 0000 for 12 AM):");


if (time >= 0 && time < 1200){
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening!");
}
else if (time >= 2100 && time < 2359){
    alert("Good Night!");
}
else {
    alert("Invalid time entered. Please entera time between 0000 and 2359." + "</br>" +
        "example: 0000 is 12am!"
    );
};
