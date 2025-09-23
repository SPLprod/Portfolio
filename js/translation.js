const pageLang = document.querySelector("html")
const uLangChoice = document.getElementById("ulang");
const langAvailable = document.getElementById("lang");

const fr = {lang : "fr"};
const en = {lang : "en"};

console.log(uLangChoice);
console.log(langAvailable);

langAvailable.style.display = "none";

uLangChoice.addEventListener("click", () => {
    if (langAvailable.style.display == "none") {
        langAvailable.style.display = "flex";
        const langFR = document.querySelector("#lang span:nth-of-type(1)");
        const langEN = document.querySelector("#lang span:nth-of-type(2)");

        console.log(langFR);
        console.log(langEN);

        langFR.addEventListener("click", () => {
            let localfr = JSON.stringify(fr)
            localStorage.setItem("lang", localfr)
            pageLang.lang = fr.lang
            langAvailable.style.display = "none";
        });
        langEN.addEventListener("click", () => {
            let localen = JSON.stringify(en)
            localStorage.setItem("lang", localen)
            pageLang.lang = en.lang
            langAvailable.style.display = "none";
        });
    } else {
        langAvailable.style.display = "none";
    }
});

langFetch = localStorage.getItem("lang")
langFetch = JSON.parse(langFetch)
console.log(langFetch);

pageLang.lang = langFetch.lang

const job = document.querySelector("#hero h3");
const CV = document.querySelector("li:nth-of-type(3)");
const aboutMeTitle = document.querySelector("#hero h3");
const aboutMe = document.querySelector("#hero h3");
const knowledge = document.querySelector("#hero h3");
const projectsTitle = document.querySelector("#hero h3");
const makeNew = document.querySelector("#hero h3");
const contactTitle = document.querySelector("#hero h3");
const formObject = document.querySelector("#hero h3");
const validButton = document.querySelector("#hero h3");

console.log(CV);
