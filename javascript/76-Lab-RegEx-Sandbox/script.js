const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const getFlags = () => {
  let flags = '';
  if (caseInsensitiveFlag.checked) flags += 'i';
  if (globalFlag.checked) flags += 'g';
  return flags;
};

testButton.addEventListener('click', () => {
  const patternValue = regexPattern.value;
  const flags = getFlags();
  const text = stringToTest.innerText;

  if (!patternValue) {
    testResult.innerText = 'no match';
    return;
  }

  const regex = new RegExp(patternValue, flags);
  const matches = text.match(regex);

  if (matches) {
    const highlightedText = text.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`,
    );
    stringToTest.innerHTML = highlightedText;
    testResult.innerText = matches.join(', ');
  } else {
    testResult.innerText = 'no match';
  }
});
