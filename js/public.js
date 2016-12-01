var clientWidth;
function autoAdapt() {
    clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 1200) {
        document.getElementsByTagName('html')[0].style.fontSize = clientWidth + 'px';
    }
}
autoAdapt();
window.onresize = function () {
    autoAdapt();
};