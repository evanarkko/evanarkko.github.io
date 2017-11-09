function cvFunction() {
    document.getElementById("myCVDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.cv-dropbtn')) {

        var dropdowns = document.getElementsByClassName("cv-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function ctFunction() {
    document.getElementById("myCTDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.ct-dropbtn')) {

        var dropdowns = document.getElementsByClassName("ct-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function kirFunction() {
    document.getElementById("myKirDropdown").classList.toggle("show");
}

function teaFunction() {
    console.log(document.getElementById("myTeaDropdown").classList);
    document.getElementById("myTeaDropdown").classList.toggle("show");
    console.log(document.getElementById("myTeaDropdown").classList);
}
function psyFunction() {
    console.log(document.getElementById("myPsyDropdown").classList);
    document.getElementById("myPsyDropdown").classList.toggle("show");
    console.log(document.getElementById("myPsyDropdown").classList);
}