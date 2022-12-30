const preloader = document.querySelector('.preloader');
const percents = document.getElementById("percents")



document.addEventListener("DOMContentLoaded", () => {

	body.classList.add('lock');
	
	const mediaFiles = document.querySelectorAll('img, video');
	let i = 0;

	Array.from(mediaFiles).forEach((file, index) => {
		file.onload = () => {
			i++;

			percents.textContent = ((i * 100) / mediaFiles.length).toFixed(1);

			if (i === mediaFiles.length) {
				preloader.classList.add('preloader--hide')
				body.classList.remove('lock');
				percents.textContent = 100;
			}
		}
	})

})