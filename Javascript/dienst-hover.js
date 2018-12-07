const dienstLink = document.querySelector('.link-holder-dienst');
const dienstArrow = document.querySelector('.arrow-dienst')

function hoverOn() {
  dienstArrow.classList.add('arrow-dienst-hover')
}

function hoverOff() {
  dienstArrow.classList.remove('arrow-dienst-hover')
}

dienstLink.addEventListener("mouseover", hoverOn);
dienstLink.addEventListener("mouseout", hoverOff);
