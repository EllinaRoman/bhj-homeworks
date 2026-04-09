const tabl =  Array.from(document.querySelectorAll('.tabs'));

tabl.forEach((nav) => {
const tabs = Array.from(nav.querySelectorAll('.tab'));
const tabContents = Array.from(nav.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
    // const index = tabs.indexOf(tab);
    tab.addEventListener('click', () => {
        tabs.forEach(tb => tb.classList.remove('tab_active'));
        tabContents.forEach(tc => tc.classList.remove('tab__content_active'));
        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
})
})
})

