const mode = document.getElementById('mode_icon');
const body = document.body;
const DARK_CLASS = 'dark';

const setTheme = (theme) => {
    if (theme === DARK_CLASS) {
        body.classList.add(DARK_CLASS);
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        mode.style.color = 'rgb(252, 229, 245)';
    } else {
        body.classList.remove(DARK_CLASS);
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        mode.style.color = 'rgb(197, 55, 113)';
    }
    localStorage.setItem('theme', theme);
};

if (mode) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    mode.addEventListener('click', () => {
        const nextTheme = body.classList.contains(DARK_CLASS) ? 'light' : 'dark';
        setTheme(nextTheme);
    });
}

