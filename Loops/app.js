// LOOPS
// 1. Declare and initi/alize an empty multidimensional array.
// (Array of arrays)
var multidimensionalArr = [[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
document.write("<h1>" + "MATRIX" + "<h1/>");
multidimensionalArr = [[0 , 1 , 2] , [3 , 4 , 5] , [6 , 7 , 8]];
for (var i = 0;i<multidimensionalArr.length;i++){
    for(j = 0;j<multidimensionalArr[i].length;j++){
       document.write("<b>" + multidimensionalArr[i][j] +"<b/>" + "  ")}
        document.write("<br/>")
};

// 3. Write a program to print numeric counting from 1 to 10.
document.write("<h3>"+"NUMARIC COUNTING" + "<h3/>");
for(var i = 1; i <=10;i++){
    document.write(i + "<br/>");
};

// 4. Write a program to print multip/lication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var userTableNum = +prompt("Enter your table number");
// var userTableLength = +prompt("Enter your table length");
// document.write( "<h4>" + "TABLE OF " + userTableNum + "<h4/>" );
// for (i=1; i<userTableLength; i++){
//     document.write(userTableNum + "X " + i + "= " + (userTableNum*i) +" <br/>");
// };

// 5. Write a program/ to print items of the following array
// using for loop:

 var fruits = ["apple", "banana", "mango", "orange","strawberry"]
 
 document.write("<h4>" + " FRUITS NAME" + "<h4/>");
 document.write(fruits + "<br/>");

 for  (var i = 0; i<fruits.length; i++){
    document.write(  "Element at " + "index "  + "is " +i);
    document.write(fruits[i]+"<br/>");
   
};

// 6. Generate the fo/llowing series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b>" + "COUNTING" + "<b/>" + "<br/>");
for(var i = 1; i <=15;i++){
    document.write(i + "<br/>");
};

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write( "<b>" + "REVERSE COUNTING " + "<b/>" + "<br/>");
for (var i =10 ; i>=1; i--){
    document.write(i + "<br/>");
};

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<b>" + "EVEN NUMBER " + "<b/>" + "<br/>");

for (var i = 0 ; i<=10; i++){
    document.write(i*2 + "<br/>");
};

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<b>" + "ODD NUMBER " + "<b/>" + "<br/>");

for (var i = 0 ; i<=9; i++){
    document.write((i*2)+ 1 + "<br/>");
};

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k/

document.write("<b>" + " SERIES " + "<b/>" + "<br/>");

for (var i = 1; i<=10; i++){
    document.write(i*2 + "k" +"<br/>");
};

// 7. You have an /array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whet/her the given item is
// found in the list or not. Example:

// var favCookie = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userItemForCheaking = prompt(" Welcome to ABC Beakry . What do you want to order Sir/Madam")
// var myVar = false;
// var user = userItemForCheaking.toLocaleLowerCase();
// for (i=0; i<favCookie.length;i++){
//     if(user==favCookie[i]){
//         alert(userItemForCheaking + "is available at index " + i + " in our beakry!");
//         myVar=true;
//     }
// }
// if(myVar==false){
//     alert("Sorry the item you entered is not available in our bakery");

// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var numbers = [24, 53, 78, 91, 12];
var largestNum = numbers[0];
for(i=0;i<numbers.length;i++){
    if(numbers[i]>largestNum){
        largestNum=numbers[i]
        
    };
    
 
};
document.write("ARRAY ITEMS" +":" + 24 + ","+ 53 + ", " + 78 +", " + 91 + ", " + 12  + "<br/>");
document.write( "The Largest Number is : " + largestNum + "<br/>");

var numbers = [24, 53, 78, 91, 12];
var smallestNum = numbers[0];
for(i=0;i<numbers.length;i++){
    if(numbers[i]<smallestNum){
       smallestNum=numbers[i]
        
    };
    
 
};
document.write("ARRAY ITEMS" +":" + 24 + ","+ 53 + ", " + 78 +", " + 91 + ", " + 12  + "<br/>");
document.write( "The Smallest Number is : " + smallestNum + "<br/>");


 
