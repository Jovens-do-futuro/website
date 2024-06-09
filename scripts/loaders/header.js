import loader from './index.js'

function loadHeader() {
  const url = '/components/header.html'

  loader(url, function (response) {
    const header = document.querySelector('header')
    header.innerHTML = response
    activeHeader()
  })
}

loadHeader()



function activeHeader() {

  const menu = document.querySelector(".menu");
  const ul = document.querySelector(".box-links");

  menu.addEventListener("click", ()=> {

    if (menu.classList.length == 1) {

      menu.classList += " active";
      ul.classList += " active";

    } else {

      menu.classList = "menu";
      ul.classList = "box-links";
    }

  })

}