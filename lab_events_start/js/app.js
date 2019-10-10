document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const titleInput = document.querySelector('#title');
  // titleInput.addEventListener('input', handleTitle);
  //
  // const authorInput = document.querySelector('#author');
  // authorInput.addEventListener('input', handleAuthor);

  // const categoryInput = document.querySelector('#category');
  // categoryInput.addEventListener('change', handleCategory);

  const saveButton = document.querySelector('#new-item-form');
  saveButton.addEventListener('submit', handleSaveClick);

})

// const handleTitle = function () {
//   const inputValue = event.target.value;
//   const inputResult = document.querySelector(titleListItem);
//   inputResult.textContent = inputValue;
// };

// const handleAuthor = function () {
//   console.log("Author response");
// };
//
// const handleCategory = function () {
//   console.log("Category Change");
// };

const handleSaveClick = function (event) {
  event.preventDefault();
  const titleListItem = document.createElement('li');
  titleListItem.textContent = `${this.title.value}`;
  const authorListItem = document.createElement('li');
  authorListItem.textContent = `${this.author.value}`;
  const categoryListItem = document.createElement('li');
  categoryListItem.textContent = `${this.category.value}`;

  const readlist = document.querySelector('ul');
  readlist.appendChild(titleListItem);
  readlist.appendChild(authorListItem);
  readlist.appendChild(categoryListItem);

  document.getElementById('#new-item-form').reset();
}
