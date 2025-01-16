
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...

  const deposits = [];

  for (let i = 0; i < array.length; i++) {
    const bankAccount = array[i];

    if (bankAccount.deposits) {
      for (let j = 0; j < bankAccount.deposits.length; j++) {
        const deposit = bankAccount.deposits[j];

        if (deposit > 100) {
          deposits.push(deposit); // Add the deposit to the deposits array
        }
      }
    }
  }

  return deposits;
}





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
