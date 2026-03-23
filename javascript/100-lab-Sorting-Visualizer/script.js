const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
};

const generateContainer = () => document.createElement('div');

const fillArrContainer = (container, arr) => {
  container.innerHTML = '';
  arr.forEach((num) => {
    const span = document.createElement('span');
    span.innerText = num;
    container.appendChild(span);
  });
};

const isOrdered = (int1, int2) => int1 <= int2;

const swapElements = (array, index) => {
  if (!isOrdered(array[index], array[index + 1])) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }
};

const highlightCurrentEls = (element, index) => {
  const children = element.children;
  const highlightStyle = '2px dashed red';
  if (children[index] && children[index + 1]) {
    children[index].style.border = highlightStyle;
    children[index + 1].style.border = highlightStyle;
  }
};

const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const arrayContainer = document.getElementById('array-container');
const startingArray = document.getElementById('starting-array');

let currentArray = [];

generateBtn.addEventListener('click', () => {
  Array.from(arrayContainer.children).forEach((child) => {
    if (child.id !== 'starting-array') {
      child.remove();
    }
  });
  currentArray = generateArray();
  fillArrContainer(startingArray, currentArray);
});

sortBtn.addEventListener('click', () => {
  let arr = [...currentArray];
  let swapped;

  highlightCurrentEls(startingArray, 0);
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }
      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, [...arr]);
      if (i < arr.length - 2) {
        highlightCurrentEls(stepDiv, i + 1);
      } else if (swapped || i === arr.length - 2) {
        highlightCurrentEls(stepDiv, 0);
      }

      arrayContainer.appendChild(stepDiv);
    }
  } while (swapped);
  const finalDiv = arrayContainer.lastElementChild;
  Array.from(finalDiv.children).forEach((span) => (span.style.border = 'none'));
});
