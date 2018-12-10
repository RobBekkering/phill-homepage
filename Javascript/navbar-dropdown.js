if (screen.width < 480) {
  const navBurger = document.querySelector('#nav-burger');
  const navDropdown = document.querySelector('#nav-dropdown');
  const navDropdownLinks = document.querySelectorAll('.nav-dropdown-link');

  navBurger.addEventListener('click', () => {
    navDropdown.classList.toggle('dropdown-toggle')
  })
  navDropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navDropdown.classList.add('dropdown-toggle')
    })
  });
}

