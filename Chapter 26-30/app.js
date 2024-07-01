// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// 

// var  userNum = parseFloat(prompt("Enter a positive integers :"));
// var roundOff = Math.round(userNum);
// var Floor = Math.floor(userNum);
// var Ceil = Math.ceil(userNum);
// document.write("Number : " + userNum + "<br/>" + "Round off value : " + roundOff + "<br/>" + "Floor value : " + Floor +"<br/>" + "Ceil value : " + Ceil )
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var  userNum = prompt("Enter a negative integers :");
// var roundOff = Math.round(userNum);
// var Floor = Math.floor(userNum);
// var Ceil = Math.ceil(userNum);
// document.write("Number : " + userNum + "<br/>" + "Round off value : " + roundOff + "<br/>" + "Floor value : " + Floor +"<br/>" + "Ceil value : " + Ceil )

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
//  var newNum = parseInt(prompt("Enter a number : "));
//  var absoluteNum = Math.abs(newNum);
//  document.write("The absolute value of" + newNum  + "is " + absoluteNum);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var diceValue = Math.floor(Math.random()*6)+1;
// // document.write("Raandom dice value :" + diceValue + "<br/>");
// // To simulate multiple rolls , you can see use a loop;
// for(var i = 0 ; i<5; i++){
//     diceValue= Math.floor(Math.random()*6)+1;
//     document.write("Raandom dice value :" + diceValue + "<br/>");
// }
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
// // document.write("Raandom coin value :" + coinValue + "<br/>");
// // // To simulate multiple tosses , you can see use a loop;
// for(var i = 0 ; i<3; i++){
//     coinValue=Math.random() < 0.5 ? "Heads" : "Tails";
//     document.write("Raandom coin value :" + coinValue + "<br/>");
// }
// 6. Write a program that sho/ws a random number between 1
// and 100 in your browser.
// var randomNumber = Math.floor(Math.random()*100)+1;
// document.write("Raandom random number between 1 and 100  :" + randomNumber + "<br/>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var inputWeigth = prompt("Enter ypur weigth (e.g. 50, 50kgs , 50.2kgs , 50.2kilograms):")
// var weightValue = parseFloat(inputWeigth);
// var weightUnit = "";
// if(inputWeigth.includes("kgs")){
//     weightUnit = "kgs";

// }else if (inputWeigth.includes("kilograms")){
//     weightUnit = "kilograms";
// }else{
//     weightUnit = "kgs";
// }
// var weigth = weightValue + " " + weightUnit ;
// document.write("The weigth  of user is " + weigth);

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNumber = Math.floor(Math.random()*10)+1;
document.write(secretNumber)
var userNumber = parseInt(prompt("Enter a number brtween 1 to 10: "));
if (userNumber===secretNumber){
    alert("Congratulations! You gussed the  secret number !" );
}else{
    alert("Sorry try again! THe secret number was" + secretNumber);
}

