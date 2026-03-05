const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

function convertMarkdown() {
  let text = markdownInput.value;

  text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  text = text.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
  text = text.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

  text = text.replace(/\!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  text = text.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  return text;
}

markdownInput.addEventListener('input', () => {
  const htmlResult = convertMarkdown();
  htmlOutput.textContent = htmlResult;
  preview.innerHTML = htmlResult;
});
