const buttonShare = document.getElementById('button');
const iconShare = document.querySelector('.share-icon');
const socialShare = document.querySelector('.share-link');

if(buttonShare){
    buttonShare.addEventListener('click', function() {
        buttonShare.classList.toggle('aktif')
        iconShare.classList.toggle('wth')
        socialShare.classList.toggle('show')
    })
}