// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

// function power(a,b){
//     var numPower = a**b;
//     return numPower;
// }
// console.log(power(3,5));

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// var year = +prompt("Enter your leap year!");
// switch(year){
//     case 2012:
// alert("This a leap year!");
//     break;
//     case 2016:
// alert("This a leap year!");
//     break;
//     case 2020:
// alert("This a leap year!");
//      break;
//     default:
// alert("This is not a leap year!")
// // };

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions



// var a = +prompt("Enter your first side");
// var b = +prompt("Enter your second side");
// var c = +prompt("Enter your third side");
// function findS(a,b,c){
//     var S = (a + b + c ) / 2;
//     return S;
// }
// var foundS = findS(a,b,c);
// function areaOfTriangle(foundS){
//     var foundS = findS(a,b,c);
//     var findingArea = foundS*(foundS-a) *(foundS-b) *(foundS-c)
//     return findingArea;
// }
// var result = areaOfTriangle(foundS);
// document.write(result);

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction

// function mainfunction(){
//     var sub1 = +prompt("Enter your first sub marks");
//     var sub2 = +prompt("Enter your second sub marks");
//     var sub3 = +prompt("Enter your third sub marks");
//     var totalNum = +prompt("Enter your total marks");
//     var average = ave(sub1,sub2,sub3);
//     var percentage = percent(sub1,sub2,sub3,totalNum);
//     console.log("Average :" + average);
//     console.log("Percentage :" + percentage + "%");
// }
// function ave(x,y,z){
//     var aver = (x,y,z)/3;
//     aver = aver.toFixed(3)
//     return aver;
// }
// function percent(x,y,z ,totalNum){
//     var per = (x,y,z)/totalNum*100;
//     per = per.toFixed(3)
//     return per;
// }
// mainfunction()

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// // for single character as of now

// function customIndexOf(string,character){
//     for(var i = 0; i<string.length; i++){
//         if(string[i]=== character){
//             return i;
//         }
// }
//     return -1;
// }
// document.write(customIndexOf("hello" , "l"));
// document.write(customIndexOf("hello" , "h"));

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.
// function deleteVowels(){
// var sentence = prompt("Enter the sentence!");
// var result = "";
// for (var i = 0; i < sentence.length; i++) {
//     var character = sentence[i];
//     if (character !== "a" && character !== "e" && character !== "i" && character !== "o" && character !== "u" && character !== "A" && character !== "E" && character !== "I" && character !== "O" && character !== "U")
//         result += character;
// }
// alert("Sentences without vowels : " + result)
// }
// deleteVowels()

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// // For example, in the sentence
// var text = "Pleases read this application and give me gratuity."
// var occu = [];
// var count = 0;
// function occurrencesfound(){
//     var char = text.toLowerCase().split(" ");    
// for(var i = 0 ; i <char.length;i++){
//         var char1 = text[i];
//         var char2 = text[i+1];
// if(correctCha(char1) && correctCha(char2)){
//     count++;
//     var char_2 = char1+char2;
//     occu.push(char_2);
// }
// }
//     return count;
// }
// function correctCha(char1){
// switch(char1){
//         case "a":
    
//         case "e":
    
//         case "i":
    
//         case "o":
    
//         case "u":
// return true;
//     default:
//         return false;
// }

// }
// var num = occurrencesfound();
// console.log("String : " + text )
// console.log("Count : " + count )
// console.log("Occurence : " + occu )

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

var distance = Number(prompt("Enter  distace from city 1 to city 2 in km"));

function meter(distance){
    var meterDistnce = distance * 1000 ;
    console.log("distace from city 1 to city 2 is " + meterDistnce + "m")
}
meter(distance)
function feet(distance){
    var feetDistnce = distance * 3281 ;
    console.log("distace from city 1 to city 2 is " + feetDistnce + "ft")
}
feet(distance)
function inches(distance){
    var inchDistnce = distance * 39370 ;
    console.log("distace from city 1 to city 2 is " + inchDistnce + "inc")
}
inches(distance)
function centimeters(distance){
    var centimeterDistnce = distance * 100000 ;
    console.log("distace from city 1 to city 2 is " + centimeterDistnce + "cm")
}
centimeters(distance)
