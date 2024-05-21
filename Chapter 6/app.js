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
var subjectName = ("English");
var subjectName1 = ("Urdu");
var subjectName2 = ("Math");
// b) Total marks for each subject is 100, store it in another
// variable.
var totalMarks = (100);
var totalMarks1 = (100);
var totalMarks2 = (100);
// c) Take obtained marks for first subject from user and
// stored it in different variable.
var obtainedMarks = (60);
var obtainedMarks1 = (54);
var obtainedMarks2 = (42);
// e) Now calculate total marks and percentage and show the
// result in browser like his.(Hint: user table)
