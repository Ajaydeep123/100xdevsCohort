/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryBox = {};
  //now we aim to create categoryBox = { Food: 30, Clothing: 15 } which is {category: categoryBox[category]or simply sum of prices for particular category}
  for (let transaction of transactions) {
    const { category, price } = transaction;
    if (categoryBox.hasOwnProperty(category)) {
      categoryBox[category] += price;
      console.log(categoryBox);
    } else {
      categoryBox[category] = price;
      console.log(categoryBox);
    }
  }
  const result = [];
  for (const category in categoryBox) {
    result.push({ category, totalSpent: categoryBox[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
