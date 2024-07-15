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
// var str = "the quick brown fox";
// function capatalizeFirstWord(){
//    var arr = str.split(" ");
//     var add = [];
//     var joinMethode;
//     for(var i = 0; i<arr.length;i++){
//         var upperCase = arr[i][0].toUpperCase()+arr[i].slice(1);
//         add.push(upperCase);
//         joinMethode=add.join(" ")
//     }
//     return joinMethode;
// }
// // // document.write("STRING : " + str + "<br/>"+ " " + "OUTPUT : " + capatalizeFirstWord());

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function largestWord(string){
//     var arr = string.split(' ');
//     var Word1 = arr[0].length;
//     for(var i = 0; i<arr.length;i++){
//         if(Word1<arr[i].length){
//             Word1= arr[i];
//         }
//     }
//    return Word1;
// }
// var string = "Web Development Tutorial"
// var result=largestWord(string) ;
// document.write("STRING : " + string + "<br/>" + "OUTPUT : " + result)

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// function | JAVASCRIPT

// Page 3 of 4

// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countLetterOccurences(string,letter){
//     string = string.toLowerCase();
//     letter = letter.toLowerCase();
//     var count = 0;
//     for(var i = 0; i<string.length;i++) {
//         if(string[i]===letter){
//             count++;
//         }
    
//     }
//     return count;
// }
// document.write(countLetterOccurences('JSResourceS,com' , 'o'  ) )


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2
function  calcCircumference(value){
    var  circumference = 2*3.14*value;
    return circumference;
}
    function calArea(value){
        var area = 3.14*(value*value);
        return area;
    } 

var radius = Number(prompt("Enter radius of a circle"));
var circumference= calcCircumference(radius);
var area = calArea(radius);
console.log("The Circumference of circle is " + circumference  )
console.log("The Area of circle is " + area  )
































