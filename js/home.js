const featuredSlides = [
  { title: 'Block Impact', description: 'Break bricks, control the ball, and chase high scores with precise timing.' },
  { title: 'Dice on Delivery', description: 'Deliver packages through an absurd city where every important decision is determined by a dice roll.' },
  { title: 'Flood Fill', description: 'A strategic puzzle game where players drag and drop colored pieces onto a board.' }
];
let featuredIndex = 0;
const featureTitle = document.querySelector('.feature-copy h1');
const featureDescription = document.querySelector('.feature-copy p:not(.eyebrow)');
const featureDots = document.querySelectorAll('.feature-dots button');
function renderFeatured(){
  const item = featuredSlides[featuredIndex];
  const words = item.title.split(' ');
  const first = words.shift();
  if(featureTitle) featureTitle.innerHTML = `${first} <span>${words.join(' ')}</span>`;
  if(featureDescription) featureDescription.textContent = item.description;
  featureDots.forEach((dot,i)=>dot.classList.toggle('active',i===featuredIndex));
}
document.querySelector('.feature-arrow.next')?.addEventListener('click',()=>{featuredIndex=(featuredIndex+1)%featuredSlides.length;renderFeatured();});
document.querySelector('.feature-arrow.prev')?.addEventListener('click',()=>{featuredIndex=(featuredIndex-1+featuredSlides.length)%featuredSlides.length;renderFeatured();});
featureDots.forEach((dot,i)=>dot.addEventListener('click',()=>{featuredIndex=i;renderFeatured();}));
renderFeatured();
