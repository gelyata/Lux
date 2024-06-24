


const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.buttonss div');
const firstCardWidth = carousel.querySelector('.carousel .card').offsetWidth;
let isDragging = false, startX, startScrollLeft;
arrowBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id === 'left'? -firstCardWidth : firstCardWidth
  });
});
const dragStart = (e)  => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);





const carousel2 = document.querySelector('.car2');
const arrowBtns2 = document.querySelectorAll('.buttonsss div');
const firstCardWidth2 = carousel2.querySelector('.card').offsetWidth;
let isDragging2 = false, startX2, startScrollLeft2;

arrowBtns2.forEach(btn => {
  btn.addEventListener('click', () => {
    carousel2.scrollLeft += btn.id === 'left'? -firstCardWidth2 : firstCardWidth2
  });
});

const dragStart2 = (e)  => {
  isDragging2 = true;
  carousel2.classList.add('dragging');
  startX2 = e.pageX;
  startScrollLeft2 = carousel2.scrollLeft;
};

const dragging2 = (e) => {
  if(!isDragging2) return;
  carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
};

const dragStop2 = () => {
  isDragging2 = false;
  carousel2.classList.remove('dragging');
};
carousel2.addEventListener('mousedown', dragStart);
carousel2.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);