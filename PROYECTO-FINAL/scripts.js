let currentIndex = 0;
const hotels = document.querySelectorAll(".hotel");

function showNextHotel() {
    hotels[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % hotels.length;
    hotels[currentIndex].style.display = "block";
}

setInterval(showNextHotel, 3000);
