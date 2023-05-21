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