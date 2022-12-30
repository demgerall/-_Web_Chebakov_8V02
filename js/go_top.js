const GoTopBtn = document.querySelector('.go_top_btn');
const GoTopWin = document.querySelector('.go_top');

window.addEventListener("scroll", getScroll)

function getScroll() {
	if (window.pageYOffset > document.documentElement.clientHeight) {
		GoTopWin.classList.add('show');
	} else {
		GoTopWin.classList.remove('show');
	}
}

GoTopBtn.onclick = function goTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -25);
		setTimeout(goTop, 0);
	}
};