// Destinations
const moreText = document.querySelector('.js-text');
const btnLoadMore = document.querySelector('.js-btn');
let initialText = moreText.textContent;

btnLoadMore.addEventListener('click', onBtnLoadMore);

// function onBtnLoadMore() {
//     moreText.textContent = 'For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'; /* Lorem new text */
//     btnLoadMore.style.display = 'none'
// }

function onBtnLoadMore() {
  if (btnLoadMore.textContent === 'Return Back') {
    moreText.textContent = initialText;
    btnLoadMore.textContent = 'Load More';
  } else {
    moreText.textContent = 'For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'; /* Lorem new text */
    btnLoadMore.textContent = 'Return Back';
  }
}



// Featured (img)
const imagesData = [
  {
    src: './img/image5_261.png',
    description: 'Warsaw, Poland'
  },
  {
    src: './img/image6_261.png',
    description: 'Prague, Czech'
  },
  {
    src: './img/image7_261.png',
    description: 'Munich, Germany'
  },
  {
    src: './img/image8_261.png',
    description: 'Paris, France'
  },
];

const viewAllBtn = document.querySelector('.js-view-all');
const images = Array.from(document.querySelectorAll('.js-image'));
const overlayTitle = document.querySelectorAll('.overlay-title');
const overlaySubtitle = document.querySelectorAll('.overlay-subtitle');

viewAllBtn.addEventListener('click', onViewAllBtnClick);

function onViewAllBtnClick() {
  images.forEach((image, index) => {
    setTimeout(() => {
      image.style.opacity = '0';
      setTimeout(() => {
        const fileName = `image${index + 5}`;
        const srcset = `
          ./img/${fileName}_261.png   261w,
          ./img/${fileName}@2_261.png 522w
        `;
        const src = `./img/${fileName}_261.png`;
        image.srcset = srcset;
        image.src = src;
        image.style.opacity = '1';
      }, 500);
    }, index * 300);
  });

  images.forEach((image, index) => {
    setTimeout(() => {
      image.style.opacity = '0';
      setTimeout(() => {
        image.src = imagesData[index].src;
        overlayTitle[index].textContent = imagesData[index].description.split(',')[0].trim();
        overlaySubtitle[index].textContent = imagesData[index].description.split(',')[1].trim();
        image.style.opacity = '1';
      }, 500);
    }, index * 300);
  });
}

// const viewAllBtn = document.querySelector('.js-view-all');
// // const prevBtn = document.querySelector('.js-prev');
// const images = Array.from(document.querySelectorAll('.js-image'));
// const overlayTitle = document.querySelectorAll('.overlay-title');
// const overlaySubtitle = document.querySelectorAll('.overlay-subtitle');
// const prevBtn = document.createElement('button');
// prevBtn.textContent = 'Prev';
// prevBtn.classList.add('js-prev');
// prevBtn.style.display = 'none';
// viewAllBtn.insertAdjacentElement('afterend', prevBtn);

// let currentIndex = 0;
// let prevBtnVisible = false;
// let initialImagesOrder = [...images];
// let initialImagesDataOrder = [...imagesData];

// viewAllBtn.addEventListener('click', onViewAllBtnClick);
// prevBtn.addEventListener('click', onPrevBtnClick);

// function onViewAllBtnClick() {
//   if (prevBtnVisible) {
//     return;
//   }

//   images.forEach((image, index) => {
//     setTimeout(() => {
//       image.style.opacity = '0';
//       setTimeout(() => {
//         const fileName = `image${index + 5}`;
//         const srcset = `
//           ./img/${fileName}_261.png   261w,
//           ./img/${fileName}@2_261.png 522w
//         `;
//         const src = `./img/${fileName}_261.png`;
//         image.srcset = srcset;
//         image.src = src;
//         image.style.opacity = '1';
//       }, 500);
//     }, index * 300);
//   });

//   images.forEach((image, index) => {
//     setTimeout(() => {
//       image.style.opacity = '0';
//       setTimeout(() => {
//         image.src = imagesData[index].src;
//         overlayTitle[index].textContent = imagesData[index].description.split(',')[0].trim();
//         overlaySubtitle[index].textContent = imagesData[index].description.split(',')[1].trim();
//         image.style.opacity = '1';
//       }, 500);
//     }, index * 300);
//   });

//   prevBtnVisible = true;
//   prevBtn.style.display = 'inline-block';
// }

// function onPrevBtnClick() {
//   images.reverse();
//   imagesData.reverse();

//   images.forEach((image, index) => {
//     setTimeout(() => {
//       image.style.opacity = '0';
//       setTimeout(() => {
//         const fileName = `image${index + 5}`;
//         const srcset = `
//           ./img/${fileName}_261.png   261w,
//           ./img/${fileName}@2_261.png 522w
//         `;
//         const src = `./img/${fileName}_261.png`;
//         image.srcset = srcset;
//         image.src = src;
//         image.style.opacity = '1';

//         overlayTitle[index].textContent = imagesData[index].description.split(',')[0].trim();
//         overlaySubtitle[index].textContent = imagesData[index].description.split(',')[1].trim();
//       }, 500);
//     }, index * 300);
//   });
// }


/* Дальше лучше и практичней использовать сборщик, и только после использовать 
библиотеку, чтобы не засорять код cdn */