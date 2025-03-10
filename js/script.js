$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
});
//3line
$('.menu-btn').click(function(){
$('.navbar .menu').toggleClass("active");
$('.menu-btn i').toggleClass("active");
});


 

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = currentTime;
}

setInterval(updateTime, 1000); // Update every second



// typing 
var typed = new Typed(".typing", {

    strings: ["Programmer", "Web Designer", "Game Designer", "Singer"],
    typeSpeed: 100, // Speed of typing (milliseconds)
    backSpeed: 50,  // Speed of deleting
    loop: true      // Infinite loop
});


});