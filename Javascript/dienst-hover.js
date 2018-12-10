if (screen.width > 480) {
  const dienstLink = document.querySelector('.link-holder-dienst');
  const dienstArrow = document.querySelector('.arrow-dienst')

  dienstLink.addEventListener("mouseover", () => {
    dienstArrow.classList.add('arrow-dienst-hover')
  });

  dienstLink.addEventListener("mouseout", () => {
    dienstArrow.classList.remove('arrow-dienst-hover')
  });
}
