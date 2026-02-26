const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', () => {
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.substring(0, 50);
  }
  const textLength = textInput.value.length;
  charCount.textContent = `Character Count: ${textLength}/50`;

  if (textLength === 50) {
    charCount.style.color = 'red';
  } else {
    charCount.style.color = '';
  }
});
