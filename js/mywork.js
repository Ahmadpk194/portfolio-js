const imgs = document.querySelectorAll('.gallery__img');
const popup = document.querySelector('.popup');
const modal = document.querySelector('.gallery__modal');
const galleryItems = document.querySelectorAll('.gallery__item');
const sidebar = document.querySelector('.sidebar')

imgs.forEach((img) => {
    img.addEventListener('click', function(e){
        let target = e.target;
        popup.classList.remove('hide');
        img.style.transform = 'scale(1)'
        modal.appendChild(target);
        img.style.filter = 'blur(0)';
    })
});


popup.addEventListener('click', function(e){
        popup.classList.add('hide');
        modal.innerHTML = '';
    
        location.reload();
    })
    
    // [sidebar, popup].forEach(item => {
    //     item.addEventListener('click', function(e) {
    //         popup.classList.add('hide');
    //         modal.innerHTML = '';
    //     })
    // })
    