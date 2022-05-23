// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const mystery6 = [9, 9, 9, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 9, 9];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
  mystery6,
];

// Add your functions below:
const invalidCards = findInvalidCards(batch);
idInvalidCardCompanies(invalidCards);
// Config array and return T/F if cardNumArr === %10
function validateCred(cardNum) {
  let cardNumArr = [...cardNum];
  let sumCardNumVal = 0;
  let lastNum = cardNumArr.pop();
  cardNumArr.reverse();
  for (let i = 0; i < cardNumArr.length; i += 2) {
    cardNumArr[i] *= 2;
    if (cardNumArr[i] > 9) {
      cardNumArr[i] -= 9;
    }
  }
  cardNumArr.push(lastNum);

  sumCardNumVal = cardNumArr.reduce(
    (previousValue, num) => previousValue + num
  );

  return sumCardNumVal % 10 === 0 ? true : false;
}

function findInvalidCards(batch) {
  let invalidCards = [];
  // taking the batch and running a test for all nums that return false when passed to validateCred
  for (let i = 0; i < batch.length; i++) {
    if (validateCred(batch[i]) === false) {
      invalidCards.push(batch[i]);
    }
  }
  return invalidCards;
}

function idInvalidCardCompanies(batch) {
  let errors = [];
  let companies = [];
  let company;
  let error;
  for (let i = 0; i < batch.length; i++) {
    switch (batch[i][0]) {
      case 3:
        company = "Amex (American Express)";
        break;
      case 4:
        company = "Visa";
        break;
      case 5:
        company = "Mastercard";
        break;
      case 6:
        company = "Discover";
        break;
      default:
        errors.push(`Card ${i + 1}/${batch.length} \n - ${batch[i].join("")}`);
    }
    // if the company is not on the list add to companies list
    if (companies.indexOf(company) === -1) {
      companies.push(company);
    }
  }
  // Results log
  console.log(
    `Number of invalid cards found: ${invalidCards.length}  \nCard issuer: `
  );
  companies.forEach((company) => console.log(" - " + company));

  console.log("\nCard issuer not identified for:");
  errors.forEach((error) => console.log("" + error));
}
