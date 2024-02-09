export function scrollWindow() { // export function with export keyword before function
  const siteNav = document.getElementById('site-title');
  const siteHeading = document.getElementById('heading');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
      siteNav.classList.add('fixed-header');
      siteHeading.classList.add('visible-title');
      siteHeading.classList.remove('nav-heading');
    } else {
      siteNav.classList.remove('fixed-header');
      siteHeading.classList.remove('visible-title');
      siteHeading.classList.add('nav-heading');
    }
  });
}