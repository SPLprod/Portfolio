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

// CARROU

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const projectTitle = document.querySelector("#project h3");
const projectLink = document.getElementById("versel");
const repository = document.getElementById("repo");
const transAnim = "img/static.gif"

console.log(leftArrow);
console.log(rightArrow);
console.log(projectTitle);
console.log(projectLink);
console.log(repository);

const projectJSON = "json/projectList.json"

fetch(projectJSON)
  .then((response) => {
    let parsed = response.json()
    return parsed
  }).then((data) => {
    console.log(data.length);
    let i = 0;
    projectTitle.innerHTML = data[i].title;
    projectLink.href = data[i].link
    repository.href = data[i].repo
    rightArrow.addEventListener("click", () => {
      ++i;
      console.log(i);
      if (i == data.length) {
        i = 0;
      }
      projectTitle.innerHTML = data[i].title;
      projectLink.href = data[i].link
      repository.href = data[i].repo
    });

    leftArrow.addEventListener("click", () => {
      --i;
      console.log(i);
      if (i < 0) {
        i = data.length - 1;
      }
      projectTitle.innerHTML = data[i].title;
      projectLink.href = data[i].link
      repository.href = data[i].repo
    });
  })

// FOOTER

const footerEffect = document.querySelector('footer')
const legal = document.querySelector("footer p")
const footercut = document.getElementById("cut")