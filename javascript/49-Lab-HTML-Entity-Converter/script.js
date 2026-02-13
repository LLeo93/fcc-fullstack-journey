function convertHTML(str) {
  return str.replace(/[&<>"']/g, (match) => {
    if (match === '&') return '&amp;';
    if (match === '<') return '&lt;';
    if (match === '>') return '&gt;';
    if (match === '"') return '&quot;';
    if (match === "'") return '&apos;';
  });
}
