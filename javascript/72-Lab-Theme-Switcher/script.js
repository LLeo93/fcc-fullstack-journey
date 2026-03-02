const themes = [
  { name: 'light', message: 'Tema chiaro attivato.' },
  { name: 'dark', message: 'Tema scuro attivato.' },
  { name: 'solarized', message: 'Tema solarized attivato.' },
  { name: 'contrast', message: 'Tema alto contrasto attivato.' },
];
const themeSwitcherBtn = document.getElementById('theme-switcher-button');
const themeDropdown = document.getElementById('theme-dropdown');
const announcer = document.getElementById('theme-announcer');
const themeItems = document.querySelectorAll(
  '#theme-dropdown [role="menuitem"]',
);

themeSwitcherBtn.addEventListener('click', () => {
  const isOpened = !themeDropdown.hasAttribute('hidden');

  if (isOpened) {
    themeDropdown.setAttribute('hidden', 'true');
    themeSwitcherBtn.setAttribute('aria-expanded', 'false');
  } else {
    themeDropdown.removeAttribute('hidden');
    themeSwitcherBtn.setAttribute('aria-expanded', 'true');
  }
});
themeItems.forEach((item) => {
  item.addEventListener('click', () => {
    const themeName = item.textContent.toLowerCase();
    document.body.className = '';
    document.body.classList.add(`theme-${themeName}`);
    const themeData = themes.find((t) => t.name === themeName);
    if (themeData) {
      announcer.textContent = themeData.message;
    }
    themeDropdown.setAttribute('hidden', 'true');
    themeSwitcherBtn.setAttribute('aria-expanded', 'false');
  });
});
