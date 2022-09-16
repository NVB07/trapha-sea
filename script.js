function showNotification(){
    alert('Vui lòng liên hệ với thông tin ở cuối trang !');
}

function Time() {
// Creating object of the Date class
var date = new Date();
// Get current hour
var hour = date.getHours();
// Get current minute
var minute = date.getMinutes();
// Get current second
var second = date.getSeconds();
// Variable to store AM / PM
var period = "";
// Assigning AM / PM according to the current hour
if (hour >= 12) {
period = "PM";
} else {
period = "AM";
}
// Converting the hour in 12-hour format
if (hour == 0) {
hour = 12;
} else {
if (hour > 12) {
hour = hour - 12;
}
}
// Updating hour, minute, and second
// if they are less than 10
hour = update(hour);
minute = update(minute);
second = update(second);
// Adding time elements to the div
document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
// Set Timer to 1 sec (1000 ms)
setTimeout(Time, 1000);
}
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
if (t < 10) {
return "0" + t;
}
else {
return t;
}
}
Time();
var curDate = new Date();

// Ngày hiện tại
var curDay = curDate.getDate();

// Tháng hiện tại
var curMonth = curDate.getMonth() + 1;

// Năm hiện tại
var curYear = curDate.getFullYear();

// Gán vào thẻ HTML
document.getElementById('current-time').innerHTML = curDay + "/" + curMonth + "/" + curYear;


var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 7000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}