let current = '';

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
  }
  localStorage.setItem('calcTheme', theme);
}

function toggleTheme() {
  const current = document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  applyTheme(current === 'light' ? 'dark' : 'light');
}

(function initTheme() {
  const saved = localStorage.getItem('calcTheme') || 'dark';
  document.addEventListener('DOMContentLoaded', () => applyTheme(saved));
})();

function updateDisplay() {
  document.getElementById('display').textContent = current || '0';
}

function appendValue(value) {
  current += value;
  updateDisplay();
}

function clearDisplay() {
  current = '';
  updateDisplay();
}

function calculate() {
  try {
    if (!/^[0-9+\-*/. ]+$/.test(current)) {
      throw new Error('Invalid input');
    }
    current = String(eval(current));
    updateDisplay();
  } catch (e) {
    current = 'Error';
    updateDisplay();
    current = '';
  }
}