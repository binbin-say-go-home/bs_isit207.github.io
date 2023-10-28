document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);

    const car = params.get("car");
    document.getElementById("carResult").textContent = "You have selected: " + car + " (" + generateRandomPlateNumber() + ")";

    const pickupDate = params.get("pdate");
    const pickupTime = params.get("ptime");
    document.getElementById("pickupDateResult").textContent = "Pickup Date and time: " + pickupDate + " " + pickupTime;

    const returnDate = params.get("rdate");
    const returnTime = params.get("rtime");
    document.getElementById("returnDateResult").textContent = "Return Date and time: " + returnDate + " " + returnTime;

    const cardNumber = params.get("cardNumber");
    document.getElementById("cardNumber").textContent = "Card Number: " + cardNumber;

    const name = params.get("cardName");
    document.getElementById("name").textContent = "Name: " + name;

    // Calculate and display the hours
    calculateAndDisplayHours(pickupDate, pickupTime, returnDate, returnTime);
	displayRate(car);
});

function calculateHoursBetweenDates(startDate, startTime, endDate, endTime) {
    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);
    const millisecondsDifference = endDateTime - startDateTime;
    const minutesDifference = millisecondsDifference / (1000 * 60);

    if (minutesDifference < 60) {
        return 1;
    } else {
        const hours = Math.ceil(minutesDifference / 60);
        return hours;
    }
}

function calculateAndDisplayHours(startDate, startTime, endDate, endTime) {
    const hours = calculateHoursBetweenDates(startDate, startTime, endDate, endTime);
    const hoursBookedElement = document.getElementById("hoursbooked");
    hoursBookedElement.textContent = "Hours booked: " + hours + " hrs (Rounded up)";
}

function displayRate(car) {
    const params = new URLSearchParams(window.location.search);
    const rateElement = document.getElementById("rate");
    let rate;

    if (car === "van") {
        rate = 30;
    } else if (car === "lambo") {
        rate = 1000;
    } else if (car === "mini") {
        rate = 20;
    } else if (car === "suv"){
        rate = 50;
    }

    rateElement.textContent = "Rate per hour for " + car + ": $" + rate;
}

function generateRandomPlateNumber() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    let plateNumber = '';

    for (let i = 0; i < 3; i++) {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        plateNumber += randomLetter;
    }

    for (let i = 0; i < 3; i++) {
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        plateNumber += randomNumber;
    }

    return plateNumber;
}

