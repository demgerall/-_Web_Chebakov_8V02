const body = document.body;

const click = document.querySelector('#click');

click.onclick = function () {
	if (click.checked) {
		body.classList.add('lock');
	} else {
		body.classList.remove('lock');
	}
};