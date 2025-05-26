// ...existing code...

// Light/Dark mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '40px';
toggleBtn.style.left = '325px';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.fontSize = '2rem';
toggleBtn.style.backgroundColor = 'transparent';
toggleBtn.style.border = 'none';
toggleBtn.style.cursor = 'pointer';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});