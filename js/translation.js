const pageLang = document.querySelector("html")
const pageTitle = document.querySelector("title")
const uLangChoice = document.getElementById("ulang");
const langAvailable = document.getElementById("lang");
const job = document.getElementById("job");
const CV = document.getElementById("CV");
const aboutMeTitle = document.querySelector("#about .content h2");
const aboutMe = document.querySelector("#about .content p");
const knowledge = document.querySelector("#about .content h3");
const projectsTitle = document.querySelector("#projects .content h2");
const makeNew = document.querySelector("#newProject h3");
const contactTitle = document.querySelector("#form h2");
const formName = document.querySelector("#mailForm label:nth-of-type(1)");
const formObject = document.querySelector("#mailForm label:nth-of-type(2)");
const validButton = document.querySelector("#submit h3");
console.log(uLangChoice);
console.log(langAvailable);
console.log(formName);


const fr = {lang : "fr"};
const en = {lang : "en"};





// récuppérer la langue utilisateur pour le site
langFetch = localStorage.getItem("lang")
langFetch = JSON.parse(langFetch)
console.log(langFetch);
pageLang.lang = langFetch.lang

const langJSON = "json/translation.json"
fetch(langJSON)
    .then((response) => {
        let parsed = response.json();
        return parsed;
    }).then((data) => {
        console.log(data);
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

                    if (pageTitle.innerText == "Portfolio") {
                        job.innerText = data.fr.job;
                        CV.innerText = data.fr.CV;
                        aboutMeTitle.innerText = data.fr.aboutMeTitle;
                        aboutMe.innerHTML = data.fr.aboutMe;
                        knowledge.innerText = data.fr.knowledge;
                        projectsTitle.innerText = data.fr.projectsTitle;
                        makeNew.innerText = data.fr.makeNew;
                    } else if (pageTitle.innerText == "Portfolio - Contact") {
                        contactTitle.innerText = data.fr.contactTitle;
                        formName.innerHTML = data.fr.formName;
                        formObject.innerText = data.fr.formObject;
                        validButton.innerText = data.fr.validButton;
                    }
                    
                });
                langEN.addEventListener("click", () => {
                    let localen = JSON.stringify(en)
                    localStorage.setItem("lang", localen)
                    pageLang.lang = en.lang
                    langAvailable.style.display = "none";

                    if (pageTitle.innerText == "Portfolio") {
                    job.innerText = data.en.job;
                    CV.innerText = data.en.CV;
                    aboutMeTitle.innerText = data.en.aboutMeTitle;
                    aboutMe.innerHTML = data.en.aboutMe;
                    knowledge.innerText = data.en.knowledge;
                    projectsTitle.innerText = data.en.projectsTitle;
                    makeNew.innerText = data.en.makeNew;
                    } else if (pageTitle.innerText == "Portfolio - Contact") {
                        CV.innerText = data.en.CV;
                        contactTitle.innerText = data.en.contactTitle;
                        formName.innerHTML = data.en.formName;
                        formObject.innerText = data.en.formObject;
                        validButton.innerText = data.en.validButton;
                    }
                });
            } else {
                langAvailable.style.display = "none";
            }
        });
        if (pageLang.lang == "fr" && pageTitle.innerText == "Portfolio") {
            job.innerText = data.fr.job;
            CV.innerText = data.fr.CV;
            aboutMeTitle.innerText = data.fr.aboutMeTitle;
            aboutMe.innerHTML = data.fr.aboutMe;
            knowledge.innerText = data.fr.knowledge;
            projectsTitle.innerText = data.fr.projectsTitle;
            makeNew.innerText = data.fr.makeNew;
        }else if (pageLang.lang == "fr" && pageTitle.innerText == "Portfolio - Contact") {
            contactTitle.innerText = data.fr.contactTitle;
            formName.innerHTML = data.fr.formName;
            formObject.innerText = data.fr.formObject;
            validButton.innerText = data.fr.validButton;
        }else if (pageLang.lang == "en" && pageTitle.innerText == "Portfolio") {
            job.innerText = data.en.job;
            CV.innerText = data.en.CV;
            aboutMeTitle.innerText = data.en.aboutMeTitle;
            aboutMe.innerHTML = data.en.aboutMe;
            knowledge.innerText = data.en.knowledge;
            projectsTitle.innerText = data.en.projectsTitle;
            makeNew.innerText = data.en.makeNew;
        }else if (pageLang.lang == "en" && pageTitle.innerText == "Portfolio - Contact") {
            CV.innerText = data.en.CV;
            contactTitle.innerText = data.en.contactTitle;
            formName.innerHTML = data.en.formName;
            formObject.innerText = data.en.formObject;
            validButton.innerText = data.en.validButton;
        }
    })
