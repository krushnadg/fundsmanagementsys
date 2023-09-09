// JavaScript code here
// Define initial balance
let balance = 0;

// Get DOM elements
const balanceAmount = document.getElementById('balanceAmount');
const transactionList = document.getElementById('transactionList');
const transactionDescription = document.getElementById('transactionDescription');
const transactionAmount = document.getElementById('transactionAmount');
const addTransaction = document.getElementById('addTransaction');
const spendTransaction = document.getElementById('spendTransaction');

// Function to display balance
function updateBalance() {
    balanceAmount.textContent = balance;
}

// Function to add a transaction
function addNewTransaction(description, amount) {
    const transactionItem = document.createElement('li');
    transactionItem.innerHTML = `${description}: ₹${amount}`;
    transactionList.appendChild(transactionItem);
    balance += amount;
    updateBalance();
}


// Event listener for adding a transaction
addTransaction.addEventListener('click', function () {
    const description = transactionDescription.value;
    const amount = parseFloat(transactionAmount.value);

    if (description && !isNaN(amount)) {
        addNewTransaction(description, amount);
        transactionDescription.value = '';
        transactionAmount.value = '';
    }
});


// Function to spend
function spendNewTransaction(sdescription, samount) {
    const transactionItem = document.createElement('li');
    transactionItem.innerHTML = `${sdescription}: ₹-${samount}`;
    transactionList.appendChild(transactionItem);
    balance -= samount;
    updateBalance();
}


// Event listener for spending a transaction
spendTransaction.addEventListener('click', function () {
    const sdescription = transactionDescriptions.value;
    const samount = parseFloat(transactionAmounts.value);

    if (sdescription && !isNaN(samount)) {
        spendNewTransaction(sdescription, samount);
        transactionDescriptions.value = '';
        transactionAmounts.value = '';
    }
});


