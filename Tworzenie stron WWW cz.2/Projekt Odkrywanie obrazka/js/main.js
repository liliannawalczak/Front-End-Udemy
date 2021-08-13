const arrow = document.querySelector('.fas')
const btn = document.querySelector('.arrow')
const img = document.querySelector('.item1')

function showImg() {
	img.classList.toggle('show')

    if(img.classList.contains('show')){
        arrow.style.transform = 'rotate(180deg)'
    }
    else{
        arrow.style.transform = 'rotate(0deg)'
    }
}

btn.addEventListener('click', showImg)