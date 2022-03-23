//
const collapseBtn = document.querySelector(".collapse-menu-btn");
const collapseMenu = document.querySelector(".mobile-menu");
collapseBtn.addEventListener('click', () => {
    collapseBtn.classList.toggle("open");
    collapseMenu.classList.toggle("open");
});

 // :: 02.0 PreventDefault a Click
const emptylinks = document.querySelectorAll("a[href='#']");
for (let index = 0; index < emptylinks.length; index++) {
    emptylinks[index].addEventListener('click', (event) => {event.preventDefault();});   
}


// Scrolling
const scrollElements = document.querySelectorAll(".js-scroll");

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
  throttleTimer = false;
  }, time);
}

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  throttle(() => {
    handleScrollAnimation();
  }, 250);
});
