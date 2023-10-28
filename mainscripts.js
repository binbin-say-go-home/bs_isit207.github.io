const carSelection = document.getElementById("carSelection");
const carImage = document.getElementById("carImage");

const carImages = {
    van: "van.jpg",
    lambo: "lambo.jpg",
    mini: "minicooper.jpg",
    suv: "suv.jpg",
};

carSelection.addEventListener("change", function() {
    const selectedCar = carSelection.value;

    if (selectedCar in carImages) {
        carImage.src = carImages[selectedCar];
    } else {
        carImage.src = "";
    }
});


const cardNumberInput = document.getElementById("cardNumber");

cardNumberInput.addEventListener("input", function (e) {
	const cardNumber = e.target.value.replace(/\D/g, "");

	const formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1 ');

e.target.value = formattedCardNumber;
});
