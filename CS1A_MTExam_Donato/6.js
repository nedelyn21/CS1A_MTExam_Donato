let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === "y") {
    let numItems = parseInt(prompt("How many items do you want to add?"), 5);
    let groceryList =[];

    for (let i=0; i < numItems; i++) {
        let item = prompt('Enter item ${i+1}:');
        groceryList.push(item);
    }

    let groceryListSorted = [...groceryList].sort();
    let groceryListReversed = [...groceryListSorted].reverse();

    alert('Original List:$ {groceryList.join(",")}\nSortedList:$ {groceryListSorted.join}(",")} \nReversed List:$ {GroceryListReversed.join(",")}');
} else {
    alert("Grocery list creation canceled.");
} 