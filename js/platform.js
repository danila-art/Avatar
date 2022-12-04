const contentLogo = document.querySelector('.content__logo');
const sliderItem = document.querySelector('.laptop-text__slider');
// const sliderAvatar = document.querySelector('.avatar-slider');
const AVATAR_2 = document.getElementById('avatar2');
const AVATAR_3 = document.getElementById('avatar3');
const AVATAR_4 = document.getElementById('avatar4');
const AVATAR_5 = document.getElementById('avatar5');
const AVATAR_6 = document.getElementById('avatar6');
const AVATAR_7 = document.getElementById('avatar7');

function changeDisplay(element) {
   let btnData = element.dataset.id;
   if (btnData == '0') {
      sliderItem.style.visibility = 'visible';
      sliderItem.style.transform = 'translateX(0%)';
      contentLogo.style.display = 'none';
      console.log(element);
   } else if (btnData == '1') {
      sliderItem.style.visibility = 'visible';
      sliderItem.style.transform = 'translateX(-100%)';
      contentLogo.style.display = 'none';
      console.log(element);
   } else if (btnData == '2') {
      sliderItem.style.visibility = 'visible';
      sliderItem.style.transform = 'translateX(-200%)';
      contentLogo.style.display = 'none';
      console.log(element);

   } else if (btnData == '3') {
      sliderItem.style.visibility = 'visible';
      sliderItem.style.transform = 'translateX(-300%)';
      contentLogo.style.display = 'none';
      console.log(element);
   } else if (btnData == '4') {
      sliderItem.style.visibility = 'visible';
      sliderItem.style.transform = 'translateX(-400%)';
      contentLogo.style.display = 'none';
      console.log(element);
   } else if (btnData == '5') {
      sliderItem.style.visibility = 'visible';
      sliderItem.style.transform = 'translateX(-500%)';
      contentLogo.style.display = 'none';
      console.log(element);
   }
}