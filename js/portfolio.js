// MARQUEE
function Marquee(selector, speed) {
  const Surface = document.getElementById(selector);
  const nextRoll = Surface.innerHTML;
  const firstElement = Surface.children[0];
  let i = 0;
  console.log(Surface);
  console.log(firstElement);
  Surface.insertAdjacentHTML('beforeend', nextRoll);

  setInterval(() => {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  });
}

window.addEventListener('load', Marquee('roll', 0.25))