const foodData = require('./food.json')

// Function to filter food items by category
function filterByCategory(foodList, category) {
    return foodList.filter(food => food.category === category);
}

// Function to filter food items by calorie
function filterByCalorie(foodList, condition) {
    return foodList.filter(food => condition === 'above' ? food.calorie > 100 : food.calorie < 100);
}

// Function to sort food items by protein content
function sortByProtein(foodList) {
    return foodList.slice().sort((a, b) => b.protiens - a.protiens);
}

// Function to sort food items by carbohydrate content
function sortByCarbohydrate(foodList) {
    return foodList.slice().sort((a, b) => a.cab - b.cab);
}

// Task 1: List all the food items
console.log("All food items:");
console.log(foodData);

// Task 2: List all the food items with category vegetables
console.log("\nVegetables:");
console.log(filterByCategory(foodData, 'Vegetable'));

// Task 3: List all the food items with category fruit
console.log("\nFruits:");
console.log(filterByCategory(foodData, 'Fruit'));

// Task 4: List all the food items with category protein
console.log("\nProteins:");
console.log(filterByCategory(foodData, 'Protein'));

// Task 5: List all the food items with category nuts
console.log("\nNuts:");
console.log(filterByCategory(foodData, 'Nuts'));

// Task 6: List all the food items with category grains
console.log("\nGrains:");
console.log(filterByCategory(foodData, 'Grain'));

// Task 7: List all the food items with category dairy
console.log("\nDairy:");
console.log(filterByCategory(foodData, 'Dairy'));

// Task 8: List all the food items with calorie above 100 and below 100
console.log("\nFood items with calorie above 100:");
console.log(filterByCalorie(foodData, 'above'));

console.log("\nFood items with calorie below 100:");
console.log(filterByCalorie(foodData, 'below'));

// Task 9: List all the food items with highest protein content to lowest
console.log("\nFood items with highest protein content to lowest:");
console.log(sortByProtein(foodData));

// Task 10: List all the food items with lowest carbohydrate content to highest
console.log("\nFood items with lowest carbohydrate content to highest:");
console.log(sortByCarbohydrate(foodData));
