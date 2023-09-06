import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";
import { createOrderData } from "./data.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null
    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }
    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}
const handleDragStart = (event) => {
    const data = {
        id: '123', 
        title: 'Sample Order', 
    };

    event.dataTransfer.setData('text/plain', JSON.stringify(data));
};

const handleDragEnd = (event) => {
};

const handleHelpToggle = (event) => {
        const dialog = document.querySelector('[data-help-overlay]');
        if (dialog.hasAttribute('open')) {
            dialog.removeAttribute('open');
        } else {
            dialog.setAttribute('open', true);
        }
    };
const handleAddToggle = (event) => {
    event.target.textContent== "Add Order" ? html.add.overlay.open = true : html.add.overlay.open = false
}
const handleAddSubmit = (event) => {
    event.preventDefault()
    let order = {
        title:html.add.title.value,
        table:html.add.table.value,
        column: "ordered"
    }
    const servedDiv = document.querySelector('.grid__content[data-column="ordered"]');
    const html_order=createOrderHtml(createOrderData(order))
    html.edit.title.value = order.title
    servedDiv.appendChild(html_order)
    html.add.overlay.open = false
}
const handleEditToggle = (event) => {
    event.target.textContent== "Cancel" ? html.edit.overlay.open = false : html.edit.overlay.open = true
}



const handleEditSubmit = (event) => {
    event.preventDefault();

    // Get the updated order details from the form
    const updatedTitle = html.edit.title.value;
    const updatedTable = html.edit.table.value;
    const updatedColumn = html.edit.column.value;
    const updatedStatus = html.edit.status.value; // Assuming there's a "Status" dropdown in the form

    // Assuming you have a function to identify the relevant order by its ID
    const orderId = '123'; // Replace with your actual order ID retrieval logic

    // Assuming you have a function to update an order's details
    updateOrderDetails(orderId, updatedTitle, updatedTable, updatedStatus);

    // If the status has changed, move the order to the new column
    if (updatedColumn !== order.column) {
        moveOrderToColumn(orderId, updatedColumn);
    }

    // Close the "Edit Order" overlay
    html.edit.overlay.open = false;

    // Optionally, you can also update the UI to reflect the changes if needed
    updateUI();
};


const handleDelete = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Find the relevant order by its ID (You should replace this logic with your own way of identifying the order)
    const orderId = '123'; // Replace with your actual order ID

    // Assuming you have a function to remove an order (you should replace this with your own logic)
    removeOrder(orderId);

    // Close the "Edit Order" overlay
    html.edit.overlay.open = false;
};

// Define an initial empty array for orders
let orders = [];

// Function to add orders to the array
function addOrder(order) {
    orders.push(order);
}

// Define a function to remove an order by ID
function removeOrder(orderId) {
    orders = orders.filter(order => order.id !== orderId);
    // Update the UI here
}

// Example of adding an order
const newOrder = { id: '1', title: 'Sample Order' };
addOrder(newOrder);

// Example of removing an order
removeOrder('1');



html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)
html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)
html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)
for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}