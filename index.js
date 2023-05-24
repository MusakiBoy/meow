const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
alert('Sabia que ibas a decir que si uwu, sin embargo no esta mal que me lo recuerdes de vez en cuando, a su vez debo decirte que yo te amo con todo lo que conlleva tu ser querida, siempre estare apoyandote y para morderte jejejje (se que debo morder menos perdon) y teta porfavor y besos y te extraño te amo muah muah <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})