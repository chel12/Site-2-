const heroTabsNav = document.querySelector('.hero-tabs-nav');
const heroTabsNavBtn = document.querySelectorAll('.hero-tabs-nav__btn');
const heroTabsItem = document.querySelectorAll('.hero-tabs__item');


heroTabsNav.addEventListener('click', (e) => {

  const target = e.target;
  if (target.classList.contains('hero-tabs-nav__btn')) {
    const path = target.dataset.path;

    heroTabsNavBtn.forEach(el => {
      el.classList.remove('hero-tabs-nav__btn--active')
    });
    target.classList.add('hero-tabs-nav__btn--active');

    heroTabsItem.forEach(el => {
      el.classList.remove('hero-tabs__item--visible');
    });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.hero-tabs__item').classList.add('hero-tabs__item--visible')
    });
  }
});
