const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ************ forEach ************
// const createItemsEl = (arr) => {
//   const itemListEl = [];

//   arr.forEach((el) => {
//     const newItemIngredientsEl = document.createElement("li");
//     newItemIngredientsEl.classList.add("item");
//     newItemIngredientsEl.textContent = el;
//     itemListEl.push(newItemIngredientsEl);
//   });

//   return itemListEl;
// };

// ************ map ************

const createItemsEl = (arr) => {
  return arr.map((x) => {
    const newItemIngredientsEl = document.createElement("li");
    newItemIngredientsEl.classList.add("item");
    newItemIngredientsEl.textContent = x;
    return newItemIngredientsEl;
  });
 
};

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...createItemsEl(ingredients));
