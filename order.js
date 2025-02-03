
const cartItems = [];
const USD_TO_GHS = 14.76; // Conversion rate from USD to GHS
let totalPrice = 0; // Store the total price in USD

// Add item to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        cartItems.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    if (cartItems.length === 0) {
        cartList.innerHTML = '<li>No items in cart</li>';
        document.getElementById('checkout').disabled = true; // Disable checkout when no items
    } else {
        totalPrice = 0; // Reset the total price
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`; // Corrected template literal
            cartList.appendChild(li);
            totalPrice += item.price; // Accumulate the total price in USD
        });
        document.getElementById('checkout').disabled = false; // Enable checkout when there are items
    }

    // Update total price based on selected currency
    updateTotalPrice();
}

// Function to update the total price based on the selected currency
function updateTotalPrice() {
    const currency = document.getElementById('currency').value;
    let displayPrice;
    let currencySymbol;

    if (currency === 'USD') {
        displayPrice = totalPrice;
        currencySymbol = '$';
    } else if (currency === 'GHS') {
        displayPrice = totalPrice * USD_TO_GHS;
        currencySymbol = 'GHC';
    }

    // Display the total price with the selected currency symbol
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerHTML = `<strong>Total: ${currencySymbol} ${displayPrice.toFixed(2)}</strong>`; // Corrected template literal
}

// Listen for currency change and update total price accordingly
document.getElementById('currency').addEventListener('change', updateTotalPrice);

// Delivery/Pickup Location input toggle functionality
document.getElementById('delivery').addEventListener('change', function () {
    const deliverySection = document.getElementById('delivery-section');
    const pickupPopup = document.getElementById('pickup-popup');
    const deliveryPopup = document.getElementById('delivery-popup');

    if (this.value === 'pickup') {
        // Show pick-up popup
        pickupPopup.style.display = 'block';
        deliverySection.style.display = 'none';
    } else if (this.value === 'delivery') {
        // Show delivery input
        deliverySection.style.display = 'block';
        pickupPopup.style.display = 'none';
    }
});

// Location Done Button
document.getElementById('done-location').addEventListener('click', () => {
    const deliveryPopup = document.getElementById('delivery-popup');
    deliveryPopup.style.display = 'block'; // Show delivery pop-up after entering the location
});

// Close Pickup Pop-up
document.getElementById('close-pickup-popup').addEventListener('click', () => {
    document.getElementById('pickup-popup').style.display = 'none';
});

// Close Delivery Pop-up
document.getElementById('close-delivery-popup').addEventListener('click', () => {
    document.getElementById('delivery-popup').style.display = 'none';
});

// Close Discount Ad
document.getElementById('close-discount').addEventListener('click', () => {
    document.getElementById('discount-ad').style.display = 'none';
});

// Pay button functionality
document.getElementById('payment-submit').addEventListener('click', () => {
    if (cartItems.length > 0) {
        alert('Your payment has been successfully submitted!');
        // Reset cart after payment
        cartItems.length = 0;
        updateCart();
    } else {
        alert('Please add items to your cart before proceeding with payment.');
    }
});

let currentIndex = 0;
let breakfastCurrentIndex = 0;

function moveSlide(direction, menuType) {
    let currentGrid;
    let currentIndexVar;
    let totalItems;
    
    // Determine which carousel (menu) we're dealing with
    if (menuType === 'coffee') {
        currentGrid = document.querySelector('.coffee-menu .product-grid');
        totalItems = document.querySelectorAll('.coffee-menu .product-card').length;
        currentIndexVar = currentIndex;
    } else if (menuType === 'breakfast') {
        currentGrid = document.querySelector('.breakfast-menu .product-grid');
        totalItems = document.querySelectorAll('.breakfast-menu .product-card').length;
        currentIndexVar = breakfastCurrentIndex;
    }

    // Move forward (right button)
    if (direction === 1) {
        currentIndexVar += direction;

        // If it reaches the end, loop back to the first item
        if (currentIndexVar >= totalItems) {
            currentIndexVar = 0;  // Reset to the first item
        }
    } 
    // Move backward (left button)
    else if (direction === -1) {
        currentIndexVar += direction;

        // If moving back, don't loop; just go to the previous item
        if (currentIndexVar<0) {
            currentIndexVar = totalItems - 1;  // Go to the last item
        }
    }

    // Calculate the item width (including margin) to move the grid
    const itemWidth = document.querySelector(`.${menuType}-menu .product-card`).offsetWidth + 20;  // Add margin for space between items

    // Move the carousel by changing the transform property
    currentGrid.style.transform = `translateX(-${currentIndexVar * itemWidth}px)`;

    // Save the updated index for the next time
    if (menuType === 'coffee') {
        currentIndex = currentIndexVar;
    } else if (menuType === 'breakfast') {
        breakfastCurrentIndex = currentIndexVar;
    }
}
let specialBeanCurrentIndex = 0;

function moveSpecialBeanSlide(direction, menuType) {
    let currentGrid;
    let currentIndexVar;
    let totalItems;
    
    // Determine which carousel (menu) we're dealing with
    if (menuType === 'special-bean') {
        currentGrid = document.querySelector('.special-bean-products .product-grid');
        totalItems = document.querySelectorAll('.special-bean-products .product-card').length;
        currentIndexVar = specialBeanCurrentIndex;
    }

    // Move forward (right button)
    if (direction === 1) {
        currentIndexVar += direction;

        // If it reaches the end, loop back to the first item
        if (currentIndexVar >= totalItems) {
            currentIndexVar = 0;  // Reset to the first item
        }
    } 
    // Move backward (left button)
    else if (direction === -1) {
        currentIndexVar += direction;

        // If moving back, don't loop; just go to the previous item
        if (currentIndexVar<0) {
            currentIndexVar = totalItems - 1;  // Go to the last item
        }
    }

    // Calculate the item width (including margin) to move the grid
    const itemWidth = document.querySelector('.special-bean-products .product-card').offsetWidth + 20;  // Add margin for space between items

    // Move the carousel by changing the transform property
    currentGrid.style.transform = `translateX(-${currentIndexVar * itemWidth}px)`;

    // Save the updated index for the next time
    specialBeanCurrentIndex = currentIndexVar;
}

let pastriesCurrentIndex = 0;

function movePastriesSlide(direction, menuType) {
    let currentGrid;
    let currentIndexVar;
    let totalItems;
    
    // Determine which carousel (menu) we're dealing with
    if (menuType === 'pastries') {
        currentGrid = document.querySelector('.pastries-menu .product-grid');
        totalItems = document.querySelectorAll('.pastries-menu .product-card').length;
        currentIndexVar = pastriesCurrentIndex;
    }

    // Move forward (right button)
    if (direction === 1) {
        currentIndexVar += direction;

        // If it reaches the end, loop back to the first item
        if (currentIndexVar >= totalItems) {
            currentIndexVar = 0;  // Reset to the first item
        }
    } 
    // Move backward (left button)
    else if (direction === -1) {
        currentIndexVar += direction;

        // If moving back, don't loop; just go to the previous item
 if (currentIndexVar < 0) {
    currentIndexVar = totalItems - 1;  // Go to the last item
}
    }

    // Calculate the item width (including margin) to move the grid
    const itemWidth = document.querySelector('.pastries-menu .product-card').offsetWidth + 20;  // Add margin for space between items

    // Move the carousel by changing the transform property
    currentGrid.style.transform = `translateX(-${currentIndexVar * itemWidth}px)`;

    // Save the updated index for the next time
    pastriesCurrentIndex = currentIndexVar;
}



document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.getElementById('checkout');
    const paymentSection = document.getElementById('payment-section');

    checkoutButton.addEventListener('click', function() {
        if (!checkoutButton.disabled) {
            paymentSection.classList.toggle('hidden'); // Toggle the hidden class
        }
    });

    // Example logic to enable the checkout button
    // This should be replaced with actual logic to check if the cart has items
    const cartItems = document.getElementById('cart-items');
    if (cartItems.children.length > 0 && cartItems.children[0].textContent !== 'No items in cart') {
        checkoutButton.disabled = false;
    }
});