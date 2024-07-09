// 1. Write a function that displays current date & time in your
// // browser.
// function currentDate(){
//     var currentDate = new Date();
//     return currentDate
// }
// document.write(currentDate());
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greeting (firstName , lastName){
//     var firstName = "Misbah";
//     var lastName = "Abid";
//    return "Hello " + firstName + " " + lastName + "!";
// }
// alert(greeting());
// 3. Write a function that adds two numbers (input by user)
// // and returns the sum of two numbers.
// function sum (){
//     var num1 = +prompt("Enter number 1");
//     var num2 = +prompt("Enter number 1");
//     return  num1+num2
// }
// alert(sum());
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// function calculator (){
//         var num1 = +prompt("Enter number 1");
//         var operator = prompt("Chose operator , + - * /")
//         var num2 = +prompt("Enter number 1");
//         var result;
//         if (operator === "+"){
//             result = num1+num2;
//         }else if (operator === "-"){
//             result = num1-num2;
//         }else if (operator === "*"){
//             result = num1*num2;
//         }else if (operator === "/"){
//         result = num1/num2;
//         }else{
//             result = "Invalid Operator"
//         }
//         return result;
//     }
//     alert(calculator());
// // 5. Write a function that squares its argument.
// function square(x){
//     return    x*x;
// }
// var result = square(9)
// alert(result)
// 6. Write a function that computes factorial of a number.
// function factorial(){
//     var num = +prompt("Enter Your Factorial Num");
//     var result = 1;
//     for(var i = 1;i<=num;i++){
//         result*=i;
//     }
//     return result;

// }
// alert(factorial())
// 7. Write a function that take start an/d end number as inputs
// & display counting in your browser.
// function count(start,end){
//     for(var i=start; i<=end;i++){
//         document.write(i+ "<br/>")
//     }
// }
// count(1,100);
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// function calculateHypotenuse(){
//     function calculateSquare(x){
//         return x*x
//     }
//     var base = +prompt("Enter a base");
//     var perp = +prompt("Enter a perp");
//     var hyp = Math.sqrt(calculateSquare(base)+calculateSquare(perp));
//     return hyp;
// }
// document.write(Math.floor(calculateHypotenuse()));

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables
// function areaOfARectangle(width,height){
//     return width*height;
// }
// // Passing Arguments as value
// var area = areaOfARectangle(5,3);//passing
// document.write(area);
// // Passing Arguments as variables
// var width = 5;
// var height= 3;
// var area = areaOfARectangle(width,height)//Passong variables width and heigth as arguments
// document.write(area);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// function  palindrome(str){
//     return str.toLowerCase()=== str.toLowerCase().split("").reverse().join("");

// }
// document.write(palindrome("madam"));

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function capatalizeFirstWord(str){
    return str.split(" ").map(word=>word[0].toUpperCase() + word.substr(1).join(""));
}
console.log(capatalizeFirstWord("the quick brown fox"));












