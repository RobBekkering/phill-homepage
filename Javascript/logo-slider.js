if (screen.width > 480) {
  let logoIndex = 0;

  function showLogos() {
      const logos = document.querySelectorAll('.logo-slider-image');
      const dots = document.querySelectorAll('.logo-slider-dot');

      for (let index = 0; index < logos.length; index++) {
          logos[index].style.display = "none";
          dots[index].style.backgroundColor = "#eee";
      }

      logoIndex++;
      if (logoIndex > logos.length) {logoIndex = 1}

      logos[logoIndex-1].style.display = "block";
      dots[logoIndex-1].style.backgroundColor = "black";
  }

  showLogos()
  setInterval(showLogos, 5000);
}
