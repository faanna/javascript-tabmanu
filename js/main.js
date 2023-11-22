//변수설정
const btns = document.querySelectorAll('ul li');
const boxes = document.querySelectorAll('section article');
const main = document.querySelector('main');

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', (e) => {
		e.preventDefault();
		active(btns, i);
		active(boxes, i);

		new Anim(main, {
			prop: 'height',
			value: matchHt(i),
			duration: convertSpeed(boxes[i]),
		});
	});
}

function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
	}
	list[index].classList.add('on');
}

function matchHt(index) {
	let ht = getComputedStyle(boxes[index]).height;
	ht = parseInt(ht);
	return ht;
}

function convertSpeed(el) {
	let speed = getComputedStyle(el).transitionDuration;
	speed = parseFloat(speed) * 1000;
	return speed;
}
