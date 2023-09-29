var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (link of tablinks) {
        link.classList.remove("active-link");
    }
    
    for (content of tabcontents) {
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); 
} 



// click to enter
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();
        $('.overlay').toggleClass('show');
        $(this).hide();
        
        // Add this line to open the "home.html" file in the same window
        window.location.href = 'home.html';
    });
});



// -----ham
var sidemenuw = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}


