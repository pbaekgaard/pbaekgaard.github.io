window.onload = function () {
const menuBtn = document.querySelector('#hamburger-btn');
const overlay = document.querySelector('.mobileNav')
const projects = document.querySelector('#projectsMobile')
const skills = document.querySelector('#skillsMobile')
const about = document.querySelector('#aboutMobile')
const contact = document.querySelector('#contactMobile')

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add("open");
    overlay.style.width = "100%";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    overlay.style.width = "0px";
    menuOpen = false;
  }
});

projects.addEventListener("click", async function(){
  if(!menuOpen) {
    overlay.style.width = "100%";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    overlay.style.width = "0px";
    menuOpen = false;
  }
  stop = true;
  await sleep(800);
  stop = false;
  await type(projectsText);
});

about.addEventListener("click", async function(){
  if(!menuOpen) {
    overlay.style.width = "100%";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    overlay.style.width = "0px";
    menuOpen = false;
  }
  stop = true;
  await sleep(800);
  stop = false;
  await type(aboutText);
});

skills.addEventListener("click", async function(){
  if(!menuOpen) {
    overlay.style.width = "100%";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    overlay.style.width = "0px";
    menuOpen = false;
  }
  stop = true;
  await sleep(800);
  stop = false;
  await type(skillsText);
});

contact.addEventListener("click", async function(){
  if(!menuOpen) {
    overlay.style.width = "100%";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    overlay.style.width = "0px";
    menuOpen = false;
  }
  stop = true;
  await sleep(800);
  stop = false;
  await type(contactText);
});





}

