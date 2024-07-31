// Chapter : Events

// 1. Show an alert box on click on a link.

// function greeting (){
//     alert("Hello World!");
// }


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// function showAlert(message){
//     alert(message)
// // }

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// function remove(e){
//     e.parentNode.parentNode.remove()
// // }

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
var counter = 0;
function increase(){
    document.getElementById("counter").innerText = counter++
}
function decrease(){
    if(counter<0){
        counter = 0
    }

    document.getElementById("counter").innerText = counter--
}