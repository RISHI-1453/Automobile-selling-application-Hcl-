document.addEventListener('DOMContentLoaded', function() {
    // Get parameters from URL
    const params = new URLSearchParams(window.location.search);
    
    // Get value of car parameter
    const car = params.get('car');
    
    // Set model and fee based on the car clicked
    let model, fee;
    switch (car) {
      case 'car1':
        model = 'Car 1';
        fee = '100';
        break;
      case 'car2':
        model = 'Car 2';
        fee = '150';
        break;
      // Add more cases for other cars as needed
     
    }
    
    // Fill fields with obtained values
    document.getElementById('model').value = model;
    document.getElementById('fee').value = fee;
  });
  
  