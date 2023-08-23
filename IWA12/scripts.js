const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

document.addEventListener('DOMContentLoaded', function() {
    const books = document.querySelectorAll('[id^="book"]');

    books.forEach(book => {
        const statusText = book.querySelector('.status');
        const reserveButton = book.querySelector('.reserve');
        const checkoutButton = book.querySelector('.checkout');
        const checkinButton = book.querySelector('.checkin');

        const statusValue = statusText.textContent.trim();
        const statusInfo = STATUS_MAP[statusValue];

        statusText.style.color = statusInfo.color;

        reserveButton.disabled = !statusInfo.canReserve;
        checkoutButton.disabled = !statusInfo.canCheckout;
        checkinButton.disabled = !statusInfo.canCheckIn;

        reserveButton.style.color = 'black';
        checkoutButton.style.color = 'black';
        checkinButton.style.color = 'black';
    });
});
