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
