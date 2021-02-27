const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector("#ingredients");
const makeListItems = ingredientsList => {
return ingredientsList.map((ingredient) => {
  const ingredientsListItemElem = document.createElement('li');
  ingredientsListItemElem.textContent = ingredient;
  return ingredientsListItemElem;});
};
const ingredientsListItem = makeListItems(ingredients);
ingredientsListRef.append(...ingredientsListItem);
