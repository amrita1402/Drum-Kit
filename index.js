//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    //addEventListener: add event in the specific element. It takes two input.
    //(tag/class/id).addEventListener("input1","input2")
    //input2 can be a named/anonymous function.
    //this.style.color="white";
    //this is the identity of that button that triggered the eventListener
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
    buttoAnimation(buttonInnerHTML);
});


}

//Detecting Keyboard Press

document.addEventListener("keypress",function(event){
    
    makeSound(event.key);

    buttoAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); //creating a varibale audio which is creating a new Audio object and given the location within braces
            tom1.play(); //play():inbuilt method
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play(); 
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play(); 
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play(); 
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play(); 
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play(); 
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play(); 
            break;
        default:console.log(buttonInnerHTML);
            
            
    }
}


function buttoAnimation(currentKey) {
    
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}
