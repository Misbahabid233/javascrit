// STRING METHODS

// 1. Write a program that takes two user inputs for first and/
// last name using prompt and merge them in a new variable/
// titled fullName. Greet the user using his full name.

// var userFirstName = prompt("Enter the first name");
// var userLastName = prompt("Enter the last name");
// var fullName = userFirstName + " " + userLastName ;
// alert("Hello " + fullName + " !");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var userFavouriteMobile = prompt("Enter your favourite mobile phone model");
// var inputLength = userFavouriteMobile.length;
// document.write("My favourite Phone is : " + userFavouriteMobile + "<br/>" + "Length of string is : " + inputLength);

// 3. Write a program to find the index of letter “n” in t/he word
// “Pakistani” and display the result in your browser .

// var countryName = "Pakistani"
// var useindexOfMethode = countryName.indexOf("n");
// document.write("String : " + countryName + "<br/>" + "Index of 'n' : " + useindexOfMethode + "<br/>" )

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var greetWord = "Hello world";
// var useLastIndexOfMethode = greetWord.lastIndexOf("l");
// document.write("String : "+ greetWord + "<br/> "+ "Last index of 'l' : " + useLastIndexOfMethode + "<br/>");

// // 5. Write a program to find the character at 3rd index in th/e
// // word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var useFindMethode = word.charAt(3);
// document.write("String : "+ word + "<br/> "+ "Character at index 3 : " + useFindMethode + "<br/>");

// // 7. Write a program to replace the “Hyder” to “Islam” in the/
// // word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var replacementWord = city.replace("Hyder", "Islam");
// document.write("City : "+ city +"<br/> "+ "After Replacement  : " + replacementWord + "<br/>");

// // 8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together" ;
// var replacementWord2 = message.replace(/and/g , "&");
// console.log(replacementWord2);

// 9. Write a program that converts a string “472” to /a number
// 472. Display the values & types in your browser.
// var value= "427";
// var typeValue1 = typeof(value) ;

// var num = Number(value);
// var typeValue2 = typeof(num);
// document.write("Value : " + value + " <br/>" + "Type : " + typeValue1 + "<br/>" +"Value :" + num + "  <br/>" + "Type : " + typeValue2 + "<br/>" );

// // 10. Write a program that takes user i/nput. Convert and
// // show the input in capital letters.
// var input = "peanuts";
// var capitalWord = input.toLocaleUpperCase();
// document.write("User input : " + input + "<br/>" + "Upper Case : " + capitalWord + "<br/>");

// // 11. Write a program that takes u/ser input. Convert and
// // show the input in title case.
// var userInput = "javascript";
// var titleCase = userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User Input : " + userInput + "<br/>" + "Title case : " + titleCase);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
//  var num = 35.36 ;
//  var convertToString = num.toString();
//  var replacingMethode = convertToString.replace(".","")
//  console.log(replacingMethode)
//  document.write( "Number : " + num + "<br/> "+"Result : "+ replacingMethode);

//  13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("Please enter your username:")
// // Cheak if the username contains any special symbols
// if(userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")){
//     alert("Welcome" + userName + "!");
// }else{
//     alert("Invalid username: Please enter a valid username without speacial character!");
// };

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// // should inform about its availability. Example:
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am ?").toLowerCase();
// var found = false;
// var index = -1;
// for(var i= 0; i<A.length;i++){
//     if(A[i].toLowerCase()=== search){
//         found = true;
//         index = i;
//         break;
//     }
// }
//     if(found){
//         alert(search + "is available at index" + index + "in our bakery.");
//     }else{
//         alert("We are sorry, " + search + "is not available in our bakery.");
//     };

// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter a password ");
// // Cheak the password meets the requirements
// if(password.length<6){
//     alert("Password must be at least 6 characters long . Please enter a valid password.");
// }else if (/^[0-9]/.test(password)){
//     alert("Password cannot start with a number. Please enter a valid password")
// }else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)){
//     alert("Password must contain both alphabates and numbers. Please enter a valid password");
// }else{
//   alert("Valid Password!");
// // }
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university = "University of Karachi";
// var convertToArray = university.split("")
// console.log(convertToArray)
//  for (var i = 0; convertToArray.length;i++){
//    document.write(convertToArray[i] );
//  }
// 17. Write a program to display the last character of a user
// input.
// var city2 = "Pakistan";
// var lastCha = city2.slice(-1);
// document.write("City : " + city2 + "<br/>" + "Last character of city is " + lastCha);

// 18. You have a string “The quick brown fox jumps/ over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog"
var count = 0 ;
var words = str.toLowerCase().split(" ");
for(var i =0; i<words.length;i++){
    if(words[i]=== "the"){
        count++
    }
};
document.write( str +"<br/>" + "There are " + count + " occurence(s) of word 'the'");
  