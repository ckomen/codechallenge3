// Retrieve the shopping list from local storage on page load
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const itemInput = document.getElementById('itemInput');
    const priceInput = document.getElementById('priceInput');
    const addButton = document.getElementById('addButton');
    const shoppingListContainer = document.getElementById('shoppingList');
    const clearListButton = document.getElementById('clearListButton');

    // Function to render the shopping list
    function renderList() {
        shoppingListContainer.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const li = document.createElement('li');
            li.classList.toggle('purchased', item.purchased);
            li.innerHTML = `
                <span>${item.text} - $${item.price}</span> 
                <button data-index="${index}">Delete</button>
            `;

            // Attach event listener to mark as purchased
            li.addEventListener('click', () => {
                // Toggle the purchased state
                item.purchased = !item.purchased;
                // Update the list visually and in localStorage
                updateLocalStorage();
                renderList();
            });

            // Delete item
            const deleteButton = li.querySelector('button');
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the "purchased" click event from firing
                shoppingList.splice(index, 1);
                updateLocalStorage();
                renderList();
            });

            shoppingListContainer.appendChild(li);
        });
    }

    // Function to update the localStorage
    function updateLocalStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }

    // Add new item to the list
    addButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        const itemPrice = parseFloat(priceInput.value.trim());

        if (itemText && !isNaN(itemPrice) && itemPrice >= 0) {
            shoppingList.push({ text: itemText, price: itemPrice, purchased: false });
            itemInput.value = '';
            priceInput.value = '';
            updateLocalStorage();
            renderList();
        }
    });

    // Clear the list
    clearListButton.addEventListener('click', () => {
        shoppingList = [];
        updateLocalStorage();
        renderList();
    });

    // Initial render
    renderList();
});

