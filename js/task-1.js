const ListItem = document.querySelector('#categories').children;
console.log(`В списке ${ListItem.length} категории.`);
console.log(" ");
const ItemsData = [...ListItem].map((item) => {
console.log(`Категория: ${item.querySelector("h2").textContent}`);
console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
console.log(" ");
})