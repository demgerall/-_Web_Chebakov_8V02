const share = document.querySelector('.share');

share.onclick = function() {
	let a = window.location.href;
	navigator.clipboard.writeText(a);
};