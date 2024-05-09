// Add event listener for clicks on car items
const carItems = document.querySelectorAll('.js-car-item');
carItems.forEach(carItem => {
    carItem.addEventListener('click', (event) => {
        // Prevent default link behavior (optional, if needed)
        event.preventDefault();

        // Get car details from data attributes
        const carName = carItem.dataset.carName;
        const carPrice = carItem.dataset.carPrice;
        const carSeats = carItem.dataset.carSeats;
        const carMileage = carItem.dataset.carMileage;

        // Update form fields with selected car details
        const carNameInput = document.getElementById('car-name');
        carNameInput.value = carName;
        const carPriceInput = document.getElementById('car-price');
        carPriceInput.value = `$${carPrice}/day`; // Format price with currency symbol

        // ... Update other form fields similarly ...

    }); // Closing curly brace for the 'click' event listener
}); // Closing curly brace for the 'forEach' loop
