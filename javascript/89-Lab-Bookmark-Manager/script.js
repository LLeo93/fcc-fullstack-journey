const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const bookmarkListSection = document.getElementById('bookmark-list-section');
const categoryDropdown = document.getElementById('category-dropdown');
const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const categoryList = document.getElementById('category-list');
const categoryNameDisplays = document.querySelectorAll('.category-name');

function getBookmarks() {
  const data = localStorage.getItem('bookmarks');
  if (!data) return [];
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      const isValid = parsed.every(
        (b) =>
          b &&
          typeof b === 'object' &&
          'name' in b &&
          'category' in b &&
          'url' in b,
      );
      return isValid ? parsed : [];
    }
    return [];
  } catch (e) {
    return [];
  }
}

function displayOrCloseForm() {
  mainSection.classList.toggle('hidden');
  formSection.classList.toggle('hidden');
}

function displayOrHideCategory() {
  mainSection.classList.toggle('hidden');
  bookmarkListSection.classList.toggle('hidden');
}

document.getElementById('add-bookmark-button').addEventListener('click', () => {
  const selectedCategory = categoryDropdown.value;
  categoryNameDisplays.forEach((el) => (el.innerText = selectedCategory));
  displayOrCloseForm();
});

document
  .getElementById('close-form-button')
  .addEventListener('click', displayOrCloseForm);

document
  .getElementById('add-bookmark-button-form')
  .addEventListener('click', () => {
    const bookmarks = getBookmarks();
    const newBookmark = {
      name: nameInput.value,
      category: categoryDropdown.value,
      url: urlInput.value,
    };
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    nameInput.value = '';
    urlInput.value = '';
    displayOrCloseForm();
  });

document
  .getElementById('view-category-button')
  .addEventListener('click', () => {
    const selectedCategory = categoryDropdown.value;
    categoryNameDisplays.forEach((el) => (el.innerText = selectedCategory));

    const bookmarks = getBookmarks();
    const filtered = bookmarks.filter((b) => b.category === selectedCategory);

    categoryList.innerHTML = '';

    if (filtered.length === 0) {
      categoryList.innerHTML = '<p>No Bookmarks Found</p>';
    } else {
      filtered.forEach((b) => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'bookmark-selection';
        radio.id = b.name;
        radio.value = b.name;

        const label = document.createElement('label');
        label.setAttribute('for', b.name);

        const anchor = document.createElement('a');
        anchor.href = b.url;
        anchor.innerText = b.name;

        label.appendChild(anchor);
        categoryList.appendChild(radio);
        categoryList.appendChild(label);
      });
    }
    displayOrHideCategory();
  });

document
  .getElementById('close-list-button')
  .addEventListener('click', displayOrHideCategory);

document
  .getElementById('delete-bookmark-button')
  .addEventListener('click', () => {
    const selectedRadio = document.querySelector(
      'input[name="bookmark-selection"]:checked',
    );
    if (!selectedRadio) return;

    const selectedCategory = categoryDropdown.value;
    let bookmarks = getBookmarks();

    const index = bookmarks.findIndex(
      (b) => b.name === selectedRadio.value && b.category === selectedCategory,
    );
    if (index !== -1) {
      bookmarks.splice(index, 1);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

      const filtered = bookmarks.filter((b) => b.category === selectedCategory);
      categoryList.innerHTML = '';
      if (filtered.length === 0) {
        categoryList.innerHTML = '<p>No Bookmarks Found</p>';
      } else {
        filtered.forEach((b) => {
          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'bookmark-selection';
          radio.id = b.name;
          radio.value = b.name;
          const label = document.createElement('label');
          label.setAttribute('for', b.name);
          const anchor = document.createElement('a');
          anchor.href = b.url;
          anchor.innerText = b.name;
          label.appendChild(anchor);
          categoryList.appendChild(radio);
          categoryList.appendChild(label);
        });
      }
    }
  });
