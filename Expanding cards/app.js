const panels = document.querySelectorAll('.panel');
const head = document.getElementsByTagName('h3');

panels[0].style.flex = 5;

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
		panel.style.flex = 5;
		head.style.opacity = 1;
	})
})

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
		panel.style.flex = 0.5;
	})
}
