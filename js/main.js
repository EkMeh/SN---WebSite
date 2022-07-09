// Get dropdown element id 
var dropdown=document.getElementById("dropdown")

// Defination a function to open the menu
function OpenMenu(){
    dropdown.style.visibility='visible';
    dropdown.style.marginLeft="0rem"
    dropdown.style.transition='.5s';
    dropdown.style.zIndex="1";
}
// Defination a function to close the menu
function CloseMenu(){
    dropdown.style.visibility='hidden';
    dropdown.style.marginLeft="-25rem"
    dropdown.style.transition='.5s';
    dropdown.style.zIndex='1';
}