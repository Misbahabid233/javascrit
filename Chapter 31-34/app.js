// // 1. Write a progr/am that displays current date and time in
// // your browser.
var currentDate = new Date();
document.write( "Current Date : "+currentDate + "<br/>");
// // 2. Write a program that alerts the current month in words.
// // For example December.
// var monthsName = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
// var month = currentDate.getMonth()
// alert( "Current Month : " + monthsName[currentDate.getMonth()]);
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var todayDay = currentDate.getDay()
// var showFirstThreeLetter = daysName[todayDay].slice(0,3);
// alert("Today is " + showFirstThreeLetter );
// 4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.
// var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var todayDay = currentDate.getDay()
// if (todayDay===0||todayDay===6){
//     alert("It's a Fun Day!");
// }else{
//     alert("It's not a Fun Day!");
// };
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var todayDate = currentDate.getDate();
// if(todayDate<16){
//     alert("First fifteen days of the month!");

// }else{
//     alert("Last days of the month!");
// }
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand./ Use any variable you like
// to represent the Date object.
// var elapsedMilliSec = currentDate.getTime();
// document.write("Elapsed MilliSec Since Jan. 1, 1970 : " + elapsedMilliSec + "<br/>")
// var elapsedMin = elapsedMilliSec/60000;
// document.write( "Elapsed Minutes Since Jan. 1, 1970 : " + elapsedMin)
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var currentHour = currentDate.getHours();
// if(currentHour<12){
//     alert("It's AM");

// }else{
//     alert("It's PM");
// };
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// // laterDate.
// var laterDate = new Date(" Thurs December 31,2020 00:00:00 GMT+0500");
// document.write( "Later Date : " + laterDate)
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var ramadanStartDate = new Date("March 10, 2024 00:00:00");
// var daysPassed = Math.round((currentDate-ramadanStartDate)/86400000);
// alert(daysPassed + " days have passed since 1st Ramadan,2024");
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT +0500");
var startOfYear = new Date("Jan 1 , 2015 00:00:00 GMT +0500");
var secondsElapased = Math.round((referenceDate-startOfYear)/1000);
document.write("On reference date " + referenceDate + ","  +"<br/>"+ secondsElapased + "seconds has passed since beginning of 2015")