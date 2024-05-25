// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10 ;
var result = (a + 5) *2 ;
document.write("The value of a is : 10" + "<br/>" + result );

document.write("<br/> The value of ++a is:" + ++a + "<br/>" );
document.write("Now the value of a is : 11 <br/>")
document.write(" <br/>The value of a++ is:" + a++ + "<br/>");
document.write("Now the value of a is : 12 <br/>")
document.write("The value of --a is:" + --a  +"<br/>");
document.write("Now the value of a is : 11 <br/>")
document.write("The value of a-- is:" + a-- + "<br/>" );
document.write("Now the value of a is : 10 <br/>")
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
var a = 2 ;
var b = 1 ;
console.log(--a);
console.log(--a - --b);
console.log(--a - --b + ++b);
console.log(--a - --b + ++b + b--);
var result = (--a - --b + ++b + b--);
document.write( "Result = " + result);
// 3. Write a program that takes input a name from user &
// greet the user.
var userName = prompt ("Enter your name");
alert("Hello " + userName);
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var userNum = prompt ("Enter your number");
console.log(4 * userNum);
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// e) Now calculate total marks and percentage and show the
// result in browser like his.(Hint: user table)
var totalMaks = 100;
var subjactName1 = prompt ("Enter your first subjact name");
var subjact1Marks = prompt ("Enter your first subjact marks ");
var subjactName2 = prompt ("Enter your second subjact name");
var subjact2Marks = prompt ("Enter your second subjact marks ");
var subjactName3 = prompt ("Enter your third subjact name");
var subjact3Marks = prompt ("Enter your third subjact marks "); 
var resultFormula1 = subjact1Marks/totalMaks*100;
var resultFormula2 = subjact2Marks/totalMaks*100;
var resultFormula3 = subjact3Marks/totalMaks*100;
var finalObtMarks = +subjact1Marks + +subjact2Marks + +subjact3Marks;
var totalFinal = 300;
var finalPercentage = finalObtMarks/totalFinal*100;


document.write (
    // Start the Table 
    "<table cellpadding = '5' cellspacing = '0'>  " +
    
    // Header

    "<thead><tr><th><b>Subject</b></th><th><b>Total Marks</b></th><th><b>Obtained Msrks</b></th><th><b>Percentage</b></th></tr></thead>" +


    // Body

    "<tbody>" +
            " <tr><td>" + subjactName1 + "</td><td>" + totalMaks + "</td><td>" + subjact1Marks + "</td><td>" + resultFormula1 + "%</td></tr>" +
            " <tr><td>" + subjactName2 + "</td><td>" + totalMaks + "</td><td>" + subjact2Marks + "</td><td>" + resultFormula2 + "%</td></tr>" +
            " <tr><td>" + subjactName3 + "</td><td>" + totalMaks + "</td><td>" + subjact3Marks + "</td><td>" + resultFormula3 + "%</td></tr>" +
            "</tbody>" + 


            // Footer

            "<tfoot><tr><b><td> </b></td>" + "<td>" + totalFinal + "</td>" + "<td>" + finalObtMarks + "</td>" + "<td>" + finalPercentage + "%</td>" + "</b></tr></tfoot>"  + 

            "</table>"

);