const body = document.getElementsByTagName('body')
const btnOpen = document.getElementById('btn-open')
const btnClose = document.getElementById('btn-close')
const navMenu = document.getElementById('nav-menu')
const btnHome = document.getElementById('btn-home')
const btnAbout = document.getElementById('btn-about')
const btnServices = document.getElementById('btn-sevices')
const btnPortfolio = document.getElementById('btn-portfolio')
const btnContact = document.getElementById('btn-contact')
const content = document.getElementById('content')
const contentFooter = document.getElementById('content-footer')

window.onload = function () {
  let widthScreen = screen.width
  if (widthScreen < 1300) {
    tgmenu()
  }

  years = document.getElementsByClassName('year')

  for(i = 0; i< years.length;i++){
    years[i].innerHTML = new Date().getFullYear()

  }
    
  
  
}

btnHome.addEventListener('click', function () {
  tgmenu()
})

btnAbout.addEventListener('click', function () {
  tgmenu()
})

// btnServices.addEventListener('click', function () {
//   tgmenu()
// })

btnPortfolio.addEventListener('click', function () {
  tgmenu()
})

// btnContact.addEventListener('click', function () {
//   tgmenu()
// })

btnClose.addEventListener('click', function () {
  tgmenu()
})

btnOpen.addEventListener('click', function () {
  tgmenu()
})

function tgmenu() {
  btnOpen.classList.toggle('close')
  btnClose.classList.toggle('close')
  navMenu.classList.toggle('close')
  content.classList.toggle('close')
  contentFooter.classList.toggle('close')
}
