"use strict";
// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn"; //let
const accountNumber = "123456";  //const
let businessName = "Balloonicorn's Cupcake Shop"; //let

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"]; //const

const phoneNumbers = new Map(); //const

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccount(name, number, business){
	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder Number: ${number}`);
	console.log(`Business Name: ${business}`);
}

// Add function to print all addresses, including a header
function showAddresses(addresses){
	console.log('Addresses:');
	addresses.forEach(function(address){
		console.log(address);
	});
}

// Add function to print phone types and numbers
function showPhoneNums(nums){
	console.log('Phone Numbers:');
	for(let [location, num] of nums){
		console.log(`${location}: ${num}`);
		}
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount){
	transactions.set(date, amount);
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);

// Add function to show balance status
function showBalanceStatus(balance){
	console.log(`Balance: ${balance}`);
	if (balance < 0){
		console.log('YOU ARE OVERDRAWN');
	} else if (balance < 20){
		console.log('Warning: You are close to zero balance');
	} else{
		console.log('Thank you for your business.');
	}
}


// Add function to show transactions
function showTransactions(transactions, balance){
	console.log(`Your starting balance is ${balance}`);
	for(let [date, amount] of transactions){
		balance += amount;
		let transactionType = 'withdrawal';
		
		if (amount > 0){
			transactionType = 'deposit';
		} 

		console.log(`On ${date}, ${transactionType} of ${amount}`);

		if (balance < 0){
			balance -= 25;
			console.log('You were overdrawn, $25 fee applied');
		}

		showBalanceStatus(balance);

	}
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




