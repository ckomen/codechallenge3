CK's Interactive Shopping List
This project is a dynamic, interactive shopping list application that allows users to add items with prices, mark items as purchased, delete individual items, and clear the entire list. The application also persists the list data in local storage, ensuring that the list remains available even after the browser is closed or refreshed.

Features
Add Items: Add an item with a name and price to the shopping list.
Mark Items as Purchased: Toggle the purchased status of any item.
Delete Items: Remove individual items from the list.
Clear List: Clear the entire shopping list.
Persistent Storage: Automatically saves and retrieves the shopping list from local storage.
Responsive Design: A clean, user-friendly interface with a responsive layout.
Technology Stack
HTML: Provides the structure for the application.
CSS: Adds styling to create a visually appealing and responsive interface.
JavaScript: Implements dynamic functionality and interactivity.
Setup and Usage
1. Prerequisites
Ensure you have a web browser to run the application. No additional software or tools are required.

2. Installation
Clone or download the repository.
Extract the files to a directory of your choice.
3. Running the Application
Open the index.html file in any web browser.
Interact with the shopping list using the provided input fields and buttons.
File Structure
1. HTML (index.html)
Defines the structure of the webpage:

Input fields for item name and price.
Buttons to add items, clear the list, and interact with individual items.
An unordered list (<ul>) to display shopping list items dynamically.
2. CSS (styles.css)
Applies styling to enhance the application's appearance:

Responsive design for various screen sizes.
Clear differentiation between purchased and unpurchased items.
Hover effects for buttons.
3. JavaScript (script.js)
Implements functionality for:

Adding, deleting, and toggling items.
Persisting the list in local storage.
Rendering the list dynamically.
Key Functions
1. Render List:

Clears and re-renders the shopping list.
Applies styles based on the purchased state.
2. Update Local Storage:

Saves the shopping list to local storage.
3. Event Listeners:

Handles button clicks for adding, clearing, and deleting items.
Allows toggling of the purchased state by clicking on a list item.
How It Works
1. Adding Items
Enter an item name and price in the input fields.
Click the "Add Item" button.
The item is added to the list and stored in local storage.
2. Marking Items as Purchased
Click on a list item to toggle its purchased status.
Purchased items are visually updated (green background and strikethrough).
3. Deleting Items
Click the "Delete" button next to an item to remove it.
The item is removed from the list and local storage.
4. Clearing the List
Click the "Clear List" button to remove all items.
The list is cleared from both the UI and local storage.
Enhancements
Editable Items: Allow users to edit item names and prices directly in the list.
Sorting: Add options to sort items by name or price.
Total Price Display: Show the total price of all items in the list.
