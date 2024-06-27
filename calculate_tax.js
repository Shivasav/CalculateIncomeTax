"use strict";

// function to calculate tax based on income group
function calculateTax(income) {
  if (income <= 9875) {
    return (income * 0.1).toFixed(2);
  } else if (income <= 40125) {
    return (987.5 + (income - 9875) * 0.12).toFixed(2);
  } else if (income <= 85525) {
    return (4617.5 + (income - 40125) * 0.22).toFixed(2);
  } else if (income <= 163300) {
    return (14605.5 + (income - 85525) * 0.24).toFixed(2);
  } else if (income <= 207350) {
    return (33271.5 + (income - 163300) * 0.32).toFixed(2);
  } else if (income <= 518400) {
    return (47367.5 + (income - 207350) * 0.35).toFixed(2);
  } else {
    return (156235 + (income - 518400) * 0.37).toFixed(2);
  }
}

// function to display error message
function displayErrorMessage(message) {
  var errorElement = document.getElementById("message");
  if (errorElement) {
    errorElement.textContent = message;
  } else {
    console.error(message);
  }
}

// function to process the entry and calculate tax
function processEntry() {
  var income = parseFloat(document.getElementById("income").value);
  var tax = document.getElementById("tax");
  var message = document.getElementById("message");

  // Clear error message
  if (message) {
    message.textContent = "";
  }

  // Validate the entry is a numeric value and greater than 0
  if (isNaN(income) || income <= 0) {
    displayErrorMessage("Invalid taxable income.");
    tax.value = "";
  } else {
    // Calculate tax amount
    var taxAmount = calculateTax(income);
    tax.value = taxAmount;
  }

  // Move focus to the input field
  document.getElementById("income").focus();
}

// Event listener for the Calculate button
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("calculateBtn")
    .addEventListener("click", processEntry);
});
