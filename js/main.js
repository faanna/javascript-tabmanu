//변수설정
const btns = document.querySelectorAll('ul li');
const boxes = document.querySelectorAll('section article');

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', (e) => {
		e.preventDefault();
		active(btns, i);
		active(boxes, i);
	});
}

function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
	}
	list[index].classList.add('on');
}
