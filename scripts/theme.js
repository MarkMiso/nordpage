const body = document.body;
const switchTeme = document.getElementById('swhitch-theme');
const theme = localStorage.getItem('theme');

if (theme) {
	body.classList.add(theme);
}

switchTeme.onclick = () => {
	if (body.className == "dark") {
		body.classList.replace('dark', 'light');
		localStorage.setItem('theme', 'light');
		
	} else {
		body.classList.replace('light', 'dark');
		localStorage.setItem('theme', 'dark');
	}
}