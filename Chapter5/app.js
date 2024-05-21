// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var sum = (5+3);
console.log(sum);
document.write("<h1>Sum of 5 and 3 is 8 </h1>");
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// subtraction
var subtraction = (5-3);
console.log(subtraction);
document.write("<h1>Subtraction of 5 and 3 is 2 </h1>");

// multiplication
var multiplication = (5*3);
console.log(multiplication);
document.write("<h1>Multiplication of 5 and 3 is 15 </h1>");
// division
var division = (5/3);
console.log(division);
document.write("<h1>Division of 5 and 3 is 1.6666 </h1>");
// modulus
var modulus = (5%3);
console.log(modulus);
document.write("<h1>Modulous of 5 and 3 is 2 </h1>");
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var age ;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
var age = (17);
// c. Initialize the variable with some number.
var x ;
console.log(x);
document.write(" <h1>Value after variable declaration is Undefined<h1/>")
// d. Show the value of variable in your browser like “Initial
// value: 5”. 
var x = (5 );
console.log(x);
document.write("<h1>Initial value : 5<h1/>");
// e. Increment the variable.
x++
// f. Show the value of variable in your browser like “Value
// after increment is: 6”. 
var x = x++ ;
document.write("<h1>Value after increment is : 6<h1/>" );
console.log(x); 
// g. Add 7 to the variable.
var add = (x+7);
console.log(add);
// h. Show the value of variable in your browser like “Value 
// after addition is: 13”.
document.write("<h1>Value after addition is : 13 <h1/>" );
// i. Decrement the variable.
add--
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
var add = add--;
console.log(add);
document.write("<h1>Value after decrement is : 12<h1/>")
// k. Show the remainder after dividing the variable’s value
// by 3.
var remiander = (add/3);
console.log(remiander);
document.write("<h1>The remainder is :0<h1/>")
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
var ticketPrice = 600;
// ticket price in a variable & calculate the cost of buying 5
// tickets to a movie
var numberOfTickets = 5 ;
// Example output:
var totalCost = (ticketPrice * numberOfTickets);
console.log(totalCost);
document.write("<h1>Total cost to buy 5 tickets to a movie is 3000 PKR <h1/>");
// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var tableNum = 4;
var counter = 1;
var increment = 1;
document.write("<h1>Table of 4<h1/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum  * increment++ + "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ +"<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ +  "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum  * increment++ + "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ + "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ + "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ + "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ + "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ + "<br/>");
document.write(tableNum + "x" + counter++ +  "=" + tableNum * increment++ + "<br/>");
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25
console.log(celsiusTemperature + "\u00B0C");
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

var fahrenheitTemperature = (celsiusTemperature * 9/5)+32;
 console.log(fahrenheitTemperature + "\u00B0C");
 document.write(celsiusTemperature+ "\u00B0C is" + fahrenheitTemperature +"\u00B0F" +"<br/>");
//  c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemperature1 = 70;
console.log(fahrenheitTemperature1 + "\u00B0C");
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemperature1 = (fahrenheitTemperature1 - 32) * 5/9;
 console.log(celsiusTemperature1 + "\u00B0C");
 document.write(fahrenheitTemperature1+ "\u00B0C is" + celsiusTemperature1 +"\u00B0F");
//  7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
var priceItem1 = 650;
// a. Price of item 2
var priceItem2 = 100;
// c. Ordered quantity of item 1
var orderedQuantityItem1 = 3;
// c. Ordered quantity of item 2
var orderedQuantityItem2 = 7;
// e. Shipping charges
var shippingCharges = 100 ;
var subTotal = (priceItem1 *orderedQuantityItem1)+(priceItem2*orderedQuantityItem2);
console.log(subTotal);
var totalPrice = (subTotal+shippingCharges);
console.log(totalPrice);
// Compute the total cost & show the receipt in your browser.
document.write("<h1> Total cost of your order is" + totalPrice);
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
var obtainedMarks = 840;
var totalMarks = 980 ;
var result = (obtainedMarks / totalMarks)*100;
console.log(result);
document.write("<h1>Marks Sheet<h1/>", "Total Marks : " +totalMarks +"<br/>" , "Obtained Marks : " + obtainedMarks +"<br/>" , "Percentage : " + result)
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 278.54 Pakistani Rupee
// and 1 Saudi Riyal = 74.27 Pakistani Rupee)
var usDoller = 10;
var saudiRiyals =25;
var totalInPKR = (usDoller*278.54) + (saudiRiyals*74.54);
console.log (totalInPKR);
document.write("<h1>Curruncy In PKR<h1/>" , "Total curruncy in PKR :" + totalInPKR);
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
var num = 10;
var add = 5;
// b. Multiply by 10
var multiply = 10 ;
// c. Divide the result by 2
var divide =  2;
var result = ((num  + add) + multiply / divide);
console.log(result);
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
var currentYear = 2024;
// b. Store their birth year in a variable.
var birthYear = 2007 ;
// c. Calculate their 2 possible ages based on the stored
// values.
var yourAge = (currentYear-birthYear);
console.log(yourAge);
document.write("<h1>Current Age <h1/>" , "Current Year :" + currentYear +"<br/>" , "Birth Year :" + birthYear +"<br/>" , "Your Age : " + yourAge);
