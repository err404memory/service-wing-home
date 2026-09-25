// One job: flip a data-theme attribute on <html> between "dark"
// and "light", and remember the choice. CSS does the rest — look
// at style.css for `:root[data-theme="light"]` to see how it reacts.

const root = document.documentElement;
const toggleButton = document.getElementById('theme-toggle');
const icon = toggleButton.querySelector('.theme-icon');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  icon.textContent = theme === 'light' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

// On load: use whatever was saved last time, defaulting to dark.
applyTheme(localStorage.getItem('theme') || 'dark');

toggleButton.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(next);
});
