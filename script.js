const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  containerHeight === 0
    ? (linksContainer.style.height = `${linksHeight}px`)
    : (linksContainer.style.height = 0);
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  //if statement
  scrollHeight > navHeight
    ? navbar.classList.add("fixed-nav")
    : navbar.classList.remove("fixed-nav");

  //if statement
  scrollHeight > 500
    ? topLink.classList.add("show-link")
    : topLink.classList.remove("show-link");
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //prevent default
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    //if statement
    !fixedNav ? (position = position - navHeight) : false;

    navHeight > 82 ? position + containerHeight : false;

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
