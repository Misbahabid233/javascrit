// Chapter 9-11

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var userCityName =  prompt ("Enter your city name") ;
// if (userCityName === "Karachi") {
//     alert("Welcome to city of lights!!");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var userGender = prompt ("Enter your gender. Who is this ? Male , Female");
// if(userGender === "Female"){
//     alert("Good Morning Ma’am.!!");
// }

// if(userGender === "Male"){
//     alert("Good Morning Sir.!!");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// var signalColour = prompt(
//     "Choose your road traffic signal colour"
//    ) ;

// if (signalColour === "Red"){
//     alert(" Red!! Must Stop .");
// };
// if (signalColour === "Green"){
//     alert(" Green!! Move now .");
// };
// if (signalColour === "Yellow"){
//     alert(" Yellow!! Ready to move .");
// };

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// 1.

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// 2.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // 3.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
    
// }
// 4.

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// 5.

//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

    // 6.

    //  if("car" < "cat"){
    //     alert("car is smaller than cat");
    //     }

    // 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var totalMaks = 100;
// var subjactName1 = prompt ("Enter your first subjact name");
// var subjact1Marks = prompt ("Enter your first subjact marks ");
// var subjactName2 = prompt ("Enter your second subjact name");
// var subjact2Marks = prompt ("Enter your second subjact marks ");
// var subjactName3 = prompt ("Enter your third subjact name");
// var subjact3Marks = prompt ("Enter your third subjact marks "); 
// var resultFormula1 = subjact1Marks/totalMaks*100;
// var resultFormula2 = subjact2Marks/totalMaks*100;
// var resultFormula3 = subjact3Marks/totalMaks*100;
// var finalObtMarks = +subjact1Marks + +subjact2Marks + +subjact3Marks;
// var totalFinal = 300;
// var finalPercentage = finalObtMarks/totalFinal*100;


// document.write (
//     // Start the Table 
//     "<table cellpadding = '5' cellspacing = '0'>  " +
    
//     // Header

//     "<thead><tr><th><b>Subject</b></th><th><b>Total Marks</b></th><th><b>Obtained Msrks</b></th><th><b>Percentage</b></th></tr></thead>" +


//     // Body

//     "<tbody>" +
//             " <tr><td>" + subjactName1 + "</td><td>" + totalMaks + "</td><td>" + subjact1Marks + "</td><td>" + resultFormula1 + "%</td></tr>" +
//             " <tr><td>" + subjactName2 + "</td><td>" + totalMaks + "</td><td>" + subjact2Marks + "</td><td>" + resultFormula2 + "%</td></tr>" +
//             " <tr><td>" + subjactName3 + "</td><td>" + totalMaks + "</td><td>" + subjact3Marks + "</td><td>" + resultFormula3 + "%</td></tr>" +
//             "</tbody>" + 


//             // Footer

//             "<tfoot><tr><b><td> </b></td>" + "<td>" + totalFinal + "</td>" + "<td>" + finalObtMarks + "</td>" + "<td>" + finalPercentage + "%</td>" + "</b></tr></tfoot>"  + 

//             "</table>"

// );
// if (finalPercentage > 79){  
//     alert("MarkSheet\n\nTotalMarks:" + totalFinal + "\n" +
//             "Obtained Marks :" + finalObtMarks + "\n" +
//             "Percentage :" + finalPercentage + "\n" +
//             "Grade : A+\n" +
//             "Remarks : Exellent!"
//     );
// }
// if (finalPercentage > 69){  
//     alert("MarkSheet\n\nTotalMarks:" + totalFinal + "\n" +
//             "Obtained Marks :" + finalObtMarks + "\n" +
//             "Percentage :" + finalPercentage + "\n" +
//             "Grade : A\n" +
//             "Remarks : Good!"
//     );
// }
// if (finalPercentage > 59){  
//     alert("MarkSheet\n\nTotalMarks:" + totalFinal + "\n" +
//             "Obtained Marks :" + finalObtMarks + "\n" +
//             "Percentage :" + finalPercentage + "\n" +
//             "Grade : B\n" +
//             "Remarks : You need to improve!"
//     );
// }
// if (finalPercentage < 59){  
//     alert("MarkSheet\n\nTotalMarks:" + totalFinal + "\n" +
//             "Obtained Marks :" + finalObtMarks + "\n" +
//             "Percentage :" + finalPercentage + "\n" +
//             "Grade : Fail\n" +
//             "Remarks : Not Passed. Sorry!"
//     );
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secretnum = 5 ;
var userPrompt = parseInt(prompt("Guess the same number" ));
if(userPrompt == secretnum){
    alert("Bingo! Correct answer") ;
    }
if(userPrompt < 6){
    alert("Sorry you guess the wrong number:");

}
if(userPrompt = 4){
    alert("Close enough to correct answer :");
    
}