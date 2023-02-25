/* checks if orange header text is orange header text using content */
/*var prev = document.getElementsByClassName('col-3')[0];

var new1 = document.createElement('div', id="date");
new1.innerHTML = "date";

prev.parentNode.replaceChild(new1, prev);*/

/*prev = e
new1 = d*/
/*document.getElementsByClassName('col-3')[0].setAttribute('class','date');*/

/*document.getElementsByClassName('d-none d-lg-block p-2')[1].innerHTML = "F/R Meals";*/

let navItem = document.getElementsByClassName("d-none d-lg-block p-2")[3];

/*function windowLoaded() {
    document.getElementsByClassName('d-none d-lg-block p-2')[3].innerHTML = "F/R Meals";
    //alert('<html>' + document.documentElement.innerHTML + '</html>');
}
addEventListener("load", windowLoaded, false);*/

document.onload() = function() { 	
    changestuff(); 	
    function changestuff() { 		
        document.navItem.innerHTML = "F/R Meals" 	
    } 
}