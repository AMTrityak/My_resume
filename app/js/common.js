$(function() {

	// Custom JS

});
function toggleMenu() {
    this.classList.toggle('open');
    document.getElementById('menu_block').classList.toggle('open_menu_block');
    document.getElementById('menu_list').classList.toggle('open_menu_list');
}

 document.querySelector('#hanburger_menu').addEventListener('click', toggleMenu);