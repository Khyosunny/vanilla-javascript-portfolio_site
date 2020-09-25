"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target; // 이벤트가 발생한 Html 요소(클릭한 li를 찾는 것)
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    const scrollTo = document.querySelector(link);
    const top = scrollTo.offsetTop - navbarHeight;
    // scrollTo.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
});

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");

// const homeTop = home.getBoundingClientRect().top; // 0
// const aboutTop = about.getBoundingClientRect().top; // 732
// const skillsTop = skills.getBoundingClientRect().top; // 1647
// const workTop = work.getBoundingClientRect().top; // 2401
// const contactTop = contact.getBoundingClientRect().top; // 3802

const topList = [0, 732, 1647, 2401, 3802];

const navHome = document.querySelector("#navhome");
const navAbout = document.querySelector("#navabout");
const navSkills = document.querySelector("#navskills");
const navWork = document.querySelector("#navwork");
const navContact = document.querySelector("#navcontact");

window.addEventListener("scroll", () => {
  const winTop = window.document.documentElement.scrollTop;
  let activeBtn = document.querySelector(".navbar__menu__item.active");
  const classRemove = () => {
    activeBtn.classList.remove("active");
  };
  console.log(winTop);
  if (winTop >= 0 && winTop <= 627) {
    classRemove();
    navHome.classList.add("active");
  } else if (winTop >= 628 && winTop <= 1494) {
    classRemove();
    navAbout.classList.add("active");
  } else if (winTop >= 1495 && winTop <= 2254) {
    classRemove();
    navSkills.classList.add("active");
  } else if (winTop >= 2255 && winTop <= 2680) {
    classRemove();
    navWork.classList.add("active");
  } else {
    classRemove();
    navContact.classList.add("active");
  }
});

// Contact Me 버튼 클릭시 이동

const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

// 스크롤 시 투명해지게

const homeContainer = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 시 Arrow up 버튼 활성화

const arrowUp = document.querySelector(".arrow-up");
const arrowStart = homeHeight / 2;

document.addEventListener("scroll", () => {
  if (window.scrollY > arrowStart) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});
