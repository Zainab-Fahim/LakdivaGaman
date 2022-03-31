//selectors
let_header = document.querySelector('.header');
let_hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListenre('scroll',function(){
    let windowPosition = window.scrollY >0;
    header.classList.toggle('active',windowPosition)
})

hamburgerMenu.addEventListen('click',function(){
    header.classList.toggle('menu-open',);
})

function toggle(clicked_id){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    showBill(clicked_id);
}

function getDays(){
    var checkInDate = new Date(document.getElementById("check-in").value);
    var checkOutDate = new Date(document.getElementById("check-out").value);
    return parseInt((checkOutDate - checkInDate) / (24 * 3600 * 1000));
}

function showBill(clicked_id){
   
    document.getElementById("bookingName").innerHTML= "Name :  " + document.getElementById("name").value;
    document.getElementById("bookingEmail").innerHTML= "Email :  " + document.getElementById("email").value;
    document.getElementById("bookingCheckInDate").innerHTML= "CheckIn Date :  " + document.getElementById("check-in").value;
    document.getElementById("bookingCheckOutDate").innerHTML= "CheckOut Date :  " + document.getElementById("check-out").value;
    var noOfAdults = document.getElementById("adults");
    document.getElementById("bookingNoOfAdults").innerHTML = "No. of Adults :  " + noOfAdults.options[noOfAdults.selectedIndex].text;
    var noOfChildren = document.getElementById("children");
    document.getElementById("bookingNoOfChildren").innerHTML = "No. of Children :  " + noOfChildren.options[noOfChildren.selectedIndex].text;
    document.getElementById("price").innerHTML = "Price :  " +"$"+ (((document.getElementById(clicked_id).value * noOfChildren.options[noOfChildren.selectedIndex].text) / 2) + (document.getElementById(clicked_id).value * noOfAdults.options[noOfAdults.selectedIndex].text)) * getDays();
    document.getElementById("noOfDays").innerHTML = "Days : " + (getDays());
    
}