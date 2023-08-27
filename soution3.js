// Build a feature for Store's Inventory.

const usdToINR = 80;
const items = {
    apple: 1,
    banana: 0.5,
    orange: 0.75
};
  
let itemsInRupees = {};
const itemsArray = Object.keys(items).map(key => {
    return  {[key]: items[key] * usdToINR };
});

for (let item of itemsArray) {
    for (let key in item) {
        itemsInRupees[key] = item[key];
    }
}

console.log(itemsArray);

