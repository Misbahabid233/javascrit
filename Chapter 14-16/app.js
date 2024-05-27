//  Chapter : 15 (ARRAY);

// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = [] ;

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentNames1 = [];

// 3. Declare and initialize a stirng array.

studentNames = ["Maryam" , "Tazmeen" ,"Mashail" , "Zunara" ,"Misbah" , "Maheen" , "Arooba ","Nimra"];
console.log (studentNames);

// 4. Declare and initialize a number array.

var studentNum = [34 , 45, 90 ,789 ,88 ,578, 67,67, 45,23,78];
console.log (studentNum);

// 5. Declare and initialize a boollen array.

var bollenArray = [true , false];
console.log (bollenArray);

// 6. Declare and initialize a mixed array.

var mixedArray = [ "Misbah", "Javeriya" , 56 ,90, 356, 67, true ,false , undefined ,null ];
console.log(mixedArray);

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var educationQulification = [];
educationQulification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M." , "Phil.", "PhD "];
console.log (educationQulification);

document.write ("<h1>" + "Qualification" +  "</h1>")
document.write( "<h3>" + "<ul>" +
        "<li>" + "SSC" +"</li>" +
        "<li>" + "BSC" +"</li>" +
        "<li>" + "HSC" +"</li>" +
        "<li>" + "BS" +"</li>" +
        "<li>" + "BCOM" +"</li>" +
        "<li>" + "MS" +"</li>" +
        "<li>" + "M." +"</li>" +
        "<li>" + "Phil." +"</li>" +
        "<li>" + "PhD" +"</li>" +
        
        "</ul>" + "</h3>"
);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentName_3 = ["Maryam" , "Mashail" , "Tazmeen"];
var studentScore_3 = [340 , 480 ,230];
var totalMarks = 500 ;
document.write("<h1>" + "STUDENT SCORE" + "</h1>")
document.write( "<h3>" + "Score of " + studentName_3[0] + "is" + studentScore_3[0] + "." + "Percentage :" + (studentScore_3[0]*100/totalMarks) + "  %" + "</h3>");
document.write( "<h3>" +"Score of " + studentName_3[1] + "is" + studentScore_3[1] + "." + "Percentage :" + (studentScore_3[1]*100/totalMarks) + "  %" + "</h3>");
document.write( "<h3>" +"Score of " + studentName_3[2] + "is" + studentScore_3[2] + "." + "Percentage :" + (studentScore_3[2]*100/totalMarks) + "  %" + "</h3>");

// 9. Initialize an array with color names. Display the array
// elements in your browser.

var colorName = [];

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

colorName.unshift(prompt("Type any colour name here to add at the beginning "));
document.write("The colour named here to the you can type for the beginning:" + "<b>" + colorName + "</b>" + "</br>");

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

colorName.push (prompt("We want one more colour to add at the end") , prompt("Aik or colour da day"));
document.write("The  updated colour  here to the adding ot the end" + "<b>" + colorName + "</b>" + "</br>");

// c. Add two more color to the beginning of the array.
// c. Add two more color to the beginning of the array.

colorName.unshift(prompt("More _2 Colour") , prompt("one more"));
document.write("More colour at the beginning :" + "<b>" + colorName + "</b>" + "</br>");

// d. Delete the first color in the array. Display the updated
// array in your browser.

colorName.shift();
document.write("After deleting the first one :" + "<b>" + colorName + "</b>" + "</br>");

// e. Delete the last color in the array. Display the updated
// array in your browser.

colorName.pop();
document.write("After deleting the last one :" + "<b>" + colorName + "</b>" + "</br>");

// f. Ask the user at which index he/she wants to add a color
// & color name. /Then add the color to desired
// position/index. . Display the updated array in your
// browser.

var index = prompt("Add colour any position");
var colour = prompt ("Which colour");
colorName.splice(index,0,colour);
document.write("Outcome after adding colour at the specific podition want you :" +  colorName + "</br>");

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the sam/e number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var index = prompt("Deleted which from specific position");
var deleted_number = prompt("Write any  deleting colour you want");

colorName.splice(index,deleted_number);
document.write("colour to deleting the colour you want :" + colorName + "</br>");
