function changeColor(element) {
     var currentColor = element.style.backgroundColor;
    if(currentColor == "brown"){
        element.style.backgroundColor = "purple";
    }else if (currentColor == "purple"){
        element.style.backgroundColor = "red";
    }else if (currentColor == "red"){
        element.style.backgroundColor = "pink";
        element.style.color = "black";
    } else{
        element.style.backgroundColor = "green";
    }
};
document.getElementById("btn").onclick = function() {
  alert("I am a Dialog box!")
};
   
    
